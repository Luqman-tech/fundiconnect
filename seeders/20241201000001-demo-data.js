'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Create categories
    const categoryIds = {
      plumbing: uuidv4(),
      electrical: uuidv4(),
      cleaning: uuidv4(),
      tutoring: uuidv4(),
      carpentry: uuidv4(),
      mechanics: uuidv4(),
      gardening: uuidv4(),
    };

    await queryInterface.bulkInsert('categories', [
      {
        id: categoryIds.plumbing,
        name: 'Plumbing',
        description: 'Water pipes, drainage, and plumbing repairs',
        icon: '🔧',
        isActive: true,
        sortOrder: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: categoryIds.electrical,
        name: 'Electrical',
        description: 'Electrical installations, repairs, and maintenance',
        icon: '⚡',
        isActive: true,
        sortOrder: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: categoryIds.cleaning,
        name: 'Cleaning',
        description: 'House cleaning, office cleaning, and deep cleaning',
        icon: '🧹',
        isActive: true,
        sortOrder: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: categoryIds.tutoring,
        name: 'Tutoring',
        description: 'Academic tutoring and educational support',
        icon: '📚',
        isActive: true,
        sortOrder: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: categoryIds.carpentry,
        name: 'Carpentry',
        description: 'Furniture making, repairs, and woodwork',
        icon: '🔨',
        isActive: true,
        sortOrder: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: categoryIds.mechanics,
        name: 'Mechanics',
        description: 'Car repairs and automotive services',
        icon: '🔧',
        isActive: true,
        sortOrder: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: categoryIds.gardening,
        name: 'Gardening',
        description: 'Garden maintenance and landscaping',
        icon: '🌱',
        isActive: true,
        sortOrder: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // Create locations
    const locationIds = {
      nairobi: uuidv4(),
      westlands: uuidv4(),
      karen: uuidv4(),
      cbd: uuidv4(),
      kiambu: uuidv4(),
    };

    await queryInterface.bulkInsert('locations', [
      {
        id: locationIds.nairobi,
        name: 'Nairobi',
        type: 'county',
        parentId: null,
        coordinates: JSON.stringify({ lat: -1.2921, lng: 36.8219 }),
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: locationIds.westlands,
        name: 'Westlands',
        type: 'area',
        parentId: locationIds.nairobi,
        coordinates: JSON.stringify({ lat: -1.2676, lng: 36.8108 }),
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: locationIds.karen,
        name: 'Karen',
        type: 'area',
        parentId: locationIds.nairobi,
        coordinates: JSON.stringify({ lat: -1.3197, lng: 36.6859 }),
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: locationIds.cbd,
        name: 'CBD',
        type: 'area',
        parentId: locationIds.nairobi,
        coordinates: JSON.stringify({ lat: -1.2841, lng: 36.8155 }),
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: locationIds.kiambu,
        name: 'Kiambu',
        type: 'county',
        parentId: null,
        coordinates: JSON.stringify({ lat: -1.1748, lng: 36.8356 }),
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // Create demo users
    const userIds = {
      admin: uuidv4(),
      client1: uuidv4(),
      provider1: uuidv4(),
      provider2: uuidv4(),
      provider3: uuidv4(),
    };

    await queryInterface.bulkInsert('users', [
      {
        id: userIds.admin,
        phoneNumber: '254700000000',
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@fundis.com',
        isVerified: true,
        isActive: true,
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: userIds.client1,
        phoneNumber: '254712345678',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        isVerified: true,
        isActive: true,
        role: 'client',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: userIds.provider1,
        phoneNumber: '254723456789',
        firstName: 'Mary',
        lastName: 'Wanjiku',
        email: 'mary.wanjiku@example.com',
        isVerified: true,
        isActive: true,
        role: 'provider',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: userIds.provider2,
        phoneNumber: '254734567890',
        firstName: 'Peter',
        lastName: 'Ochieng',
        email: 'peter.ochieng@example.com',
        isVerified: true,
        isActive: true,
        role: 'provider',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: userIds.provider3,
        phoneNumber: '254745678901',
        firstName: 'Grace',
        lastName: 'Muthoni',
        email: 'grace.muthoni@example.com',
        isVerified: true,
        isActive: true,
        role: 'provider',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // Create service providers
    const providerIds = {
      provider1: uuidv4(),
      provider2: uuidv4(),
      provider3: uuidv4(),
    };

    await queryInterface.bulkInsert('service_providers', [
      {
        id: providerIds.provider1,
        userId: userIds.provider1,
        businessName: 'Clean Masters',
        description: 'Professional cleaning services for homes and offices. We provide thorough cleaning with eco-friendly products.',
        experience: 3,
        hourlyRate: 600.00,
        availability: JSON.stringify({
          monday: { start: '08:00', end: '17:00' },
          tuesday: { start: '08:00', end: '17:00' },
          wednesday: { start: '08:00', end: '17:00' },
          thursday: { start: '08:00', end: '17:00' },
          friday: { start: '08:00', end: '17:00' },
          saturday: { start: '09:00', end: '15:00' },
        }),
        skills: JSON.stringify(['House Cleaning', 'Office Cleaning', 'Deep Cleaning', 'Carpet Cleaning']),
        isVerified: true,
        isActive: true,
        rating: 4.9,
        totalReviews: 45,
        completedJobs: 120,
        responseTime: 15,
        locationId: locationIds.karen,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: providerIds.provider2,
        userId: userIds.provider2,
        businessName: 'ElectroFix',
        description: 'Licensed electrician with 7 years of experience. Specializing in residential and commercial electrical work.',
        experience: 7,
        hourlyRate: 1000.00,
        availability: JSON.stringify({
          monday: { start: '07:00', end: '18:00' },
          tuesday: { start: '07:00', end: '18:00' },
          wednesday: { start: '07:00', end: '18:00' },
          thursday: { start: '07:00', end: '18:00' },
          friday: { start: '07:00', end: '18:00' },
          saturday: { start: '08:00', end: '16:00' },
        }),
        skills: JSON.stringify(['Wiring', 'Electrical Repairs', 'Installation', 'Troubleshooting']),
        isVerified: true,
        isActive: true,
        rating: 4.7,
        totalReviews: 38,
        completedJobs: 95,
        responseTime: 20,
        locationId: locationIds.cbd,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: providerIds.provider3,
        userId: userIds.provider3,
        businessName: 'Math Tutors Plus',
        description: 'Experienced mathematics tutor for primary, secondary, and university students. Flexible scheduling available.',
        experience: 5,
        hourlyRate: 800.00,
        availability: JSON.stringify({
          monday: { start: '14:00', end: '20:00' },
          tuesday: { start: '14:00', end: '20:00' },
          wednesday: { start: '14:00', end: '20:00' },
          thursday: { start: '14:00', end: '20:00' },
          friday: { start: '14:00', end: '20:00' },
          saturday: { start: '09:00', end: '17:00' },
          sunday: { start: '09:00', end: '17:00' },
        }),
        skills: JSON.stringify(['Mathematics', 'Physics', 'Statistics', 'Calculus']),
        isVerified: true,
        isActive: true,
        rating: 4.8,
        totalReviews: 28,
        completedJobs: 85,
        responseTime: 10,
        locationId: locationIds.westlands,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // Create services
    const serviceIds = {
      houseCleaning: uuidv4(),
      electricalRepair: uuidv4(),
      mathTutoring: uuidv4(),
    };

    await queryInterface.bulkInsert('services', [
      {
        id: serviceIds.houseCleaning,
        providerId: providerIds.provider1,
        categoryId: categoryIds.cleaning,
        title: 'Professional House Cleaning',
        description: 'Complete house cleaning service including all rooms, kitchen, and bathrooms. We bring our own supplies and equipment.',
        price: 2500.00,
        priceType: 'fixed',
        duration: 180,
        isActive: true,
        images: JSON.stringify([]),
        tags: JSON.stringify(['cleaning', 'house', 'professional', 'eco-friendly']),
        requirements: 'Access to water and electricity. Please secure valuable items.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: serviceIds.electricalRepair,
        providerId: providerIds.provider2,
        categoryId: categoryIds.electrical,
        title: 'Electrical Repair & Installation',
        description: 'Professional electrical services including repairs, installations, and troubleshooting. Licensed and insured.',
        price: 1000.00,
        priceType: 'hourly',
        duration: 60,
        isActive: true,
        images: JSON.stringify([]),
        tags: JSON.stringify(['electrical', 'repair', 'installation', 'licensed']),
        requirements: 'Access to electrical panel. Safety equipment will be provided.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: serviceIds.mathTutoring,
        providerId: providerIds.provider3,
        categoryId: categoryIds.tutoring,
        title: 'Mathematics Tutoring',
        description: 'One-on-one mathematics tutoring for students of all levels. Customized learning plans and flexible scheduling.',
        price: 800.00,
        priceType: 'hourly',
        duration: 60,
        isActive: true,
        images: JSON.stringify([]),
        tags: JSON.stringify(['tutoring', 'mathematics', 'education', 'flexible']),
        requirements: 'Quiet study space and learning materials (notebooks, calculator).',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // Create sample bookings
    const bookingIds = {
      booking1: uuidv4(),
      booking2: uuidv4(),
    };

    await queryInterface.bulkInsert('bookings', [
      {
        id: bookingIds.booking1,
        clientId: userIds.client1,
        providerId: providerIds.provider1,
        serviceId: serviceIds.houseCleaning,
        title: 'Weekly House Cleaning',
        description: 'Regular weekly cleaning for 3-bedroom house',
        scheduledDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
        estimatedDuration: 180,
        location: JSON.stringify({
          address: 'Karen, Nairobi',
          latitude: -1.3197,
          longitude: 36.6859,
        }),
        status: 'confirmed',
        amount: 2500.00,
        paymentStatus: 'paid',
        notes: 'Please focus on kitchen and bathrooms',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: bookingIds.booking2,
        clientId: userIds.client1,
        providerId: providerIds.provider3,
        serviceId: serviceIds.mathTutoring,
        title: 'Calculus Tutoring Session',
        description: 'Help with calculus homework and exam preparation',
        scheduledDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // Day after tomorrow
        estimatedDuration: 120,
        location: JSON.stringify({
          address: 'Westlands, Nairobi',
          latitude: -1.2676,
          longitude: 36.8108,
        }),
        status: 'pending',
        amount: 1600.00,
        paymentStatus: 'pending',
        notes: 'Struggling with derivatives and integrals',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('bookings', null, {});
    await queryInterface.bulkDelete('services', null, {});
    await queryInterface.bulkDelete('service_providers', null, {});
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkDelete('locations', null, {});
    await queryInterface.bulkDelete('categories', null, {});
  }
};