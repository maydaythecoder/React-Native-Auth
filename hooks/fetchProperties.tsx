import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase/firebase';
import { Property } from '@/types/PropertyTypes';

export const fetchProperties = async (): Promise<Property[]> => {
  try {
    const listingsRef = collection(db, 'listings');
    const querySnapshot = await getDocs(listingsRef);

    if (querySnapshot.empty) {
      console.log('No properties found');
      return [];
    }

    const propertiesPromises = querySnapshot.docs.map(async (doc) => {
      const data = doc.data();
      
      // Helper function to fetch address
      const fetchAddress = async (ref: any) => {
        try {
          const docSnap = await getDoc(ref);
          return docSnap.exists() ? docSnap.data() : null;
        } catch (error) {
          console.error('Error fetching address:', error);
          return null;
        }
      };

      return {
        id: doc.id,
        title: data.title || 'No Title',
        description: data.description || '',
        propertyType: data.isCondo ? 'Condo' : data.isCommercialListing ? 'Commercial' : 'House',
        price: data.rent || 0,
        availabilityDate: new Date(data.dateAvailable || new Date()),
        bedrooms: data.bedrooms || 0,
        bathrooms: data.bathrooms || 0,
        features: data.features || [],
        images: data.images || [],
        agentId: data.assignedTo || '',
        geoLocation: { lat: data.geoLocation?.lat || 0, lng: data.geoLocation?.lng || 0 },
        forRent: data.forRent || false,
        tags: data.tags || [],
        createdAt: new Date(),
        updatedAt: new Date(),
        address: data.address ? await fetchAddress(data.address) : undefined,
        squareFeet: data.squareFeet,
        parkingSpaces: data.parkingSpaces,
        hasLaundry: data.hasLaundry,
        hasPetsAllowed: data.hasPets,
        contactEmail: data.contactEmail
      } as Property;
    });

    const properties = await Promise.all(propertiesPromises);

    console.log('Fetched properties:', properties.map(p => ({
      id: p.id,
      images: p.images
    })));

    return properties;

  } catch (error) {
    console.error('Error fetching properties:', error);
    throw error;
  }
};
