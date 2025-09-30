const API_BASE_URL = 'http://localhost:3001/api';

// Types
export interface Tour {
  _id: string;
  title: string;
  description: string;
  price: number;
  duration: number;
}

export interface BookingData {
  tourId: string;
  name: string;
  email: string;
  date: string;
  phone?: string;
  specialRequests?: string;
}

export interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
  tourInterest?: string;
}

export interface SOSData {
  lat: number;
  lng: number;
  message: string;
}

// API Functions
export const api = {
  // Tours
  async getTours(): Promise<Tour[]> {
    const response = await fetch(`${API_BASE_URL}/tours`);
    if (!response.ok) throw new Error('Failed to fetch tours');
    return response.json();
  },

  async getTour(id: string): Promise<Tour> {
    const response = await fetch(`${API_BASE_URL}/tours/${id}`);
    if (!response.ok) throw new Error('Failed to fetch tour');
    return response.json();
  },

  // Bookings
  async createBooking(bookingData: BookingData) {
    const response = await fetch(`${API_BASE_URL}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });
    if (!response.ok) throw new Error('Failed to create booking');
    return response.json();
  },

  // Contact
  async submitContact(contactData: ContactData) {
    console.log('API: Submitting contact to:', `${API_BASE_URL}/contact`);
    console.log('API: Contact data:', contactData);
    
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });
    
    console.log('API: Response status:', response.status);
    console.log('API: Response ok:', response.ok);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('API: Error response:', errorText);
      throw new Error(`Failed to submit contact form: ${response.status} ${errorText}`);
    }
    
    return response.json();
  },

  // SOS
  async sendSOS(sosData: SOSData) {
    const response = await fetch(`${API_BASE_URL}/sos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sosData),
    });
    if (!response.ok) throw new Error('Failed to send SOS');
    return response.json();
  },
};
