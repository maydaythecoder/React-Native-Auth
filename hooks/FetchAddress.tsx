import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/firebase';
import { Address } from '@/types/AddressTypes';

export const fetchAddresses = async (): Promise<Address[]> => {
  try {
    const addressRef = collection(db, 'addresses');
    const querySnapshot = await getDocs(addressRef);
    
    if (querySnapshot.empty) {
      console.log('No matching documents');
      return [];
    }

    const addresses: Address[] = querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        city: data.city,
        coordinates: data.coordinates,
        country: data.country,
        createdAt: data.createdAt,
        neighborhood: data.neighborhood,
        postalCode: data.postalCode,
        state: data.state,
        street: data.street
      };
    });

    return addresses;
  } catch (error) {
    console.error('Error fetching addresses:', error);
    throw error;
  }
}
