import React from "react";
import Bookings from "@/components/Bookings";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BookingsPage = () => {
    return (
        <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-20">
            <Bookings />
        </main>
        <Footer />
        </div>
    );
};

export default BookingsPage;
