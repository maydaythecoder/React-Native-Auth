export interface Property{
    id: string;
    title: string;
    description: string;
    propertyType: string;
    price: number;
    availabilityDate: Date;
    bedrooms: number;
    bathrooms: number;
    yearBuilt?: number;
    features: string[];
    images: string[];
    agentId: string;
    geoLocation: {
      lat: number;
      lng: number;
    };
    forRent: boolean;
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
    address?: string;
    squareFeet?: number;
    parkingSpaces?: number;
    hasLaundry?: boolean;
    hasPetsAllowed?: boolean;
    contactEmail?: string;
  }
  
  export interface CityType {
    id: string;
    city: string;
    propertyCount: number;
    imageUrl: string;
  }
  
  export interface SavedSearch {
    title: string;
    date: string;
  }