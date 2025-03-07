export interface Agent {
    id: string;
    name: string;
    title: string;
    status: 'Available' | 'Busy' | 'Away';
    avatar: string;
  }