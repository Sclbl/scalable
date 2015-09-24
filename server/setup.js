Meteor.startup(() => {
  // Create an admin user if not yet present
  if (Meteor.users.find().count() === 0) {
    let adminUser = Accounts.createUser({ username: 'admin', email: 'admin@sclbl.com', password: '12345678', isAdmin: true });

    if (adminUser) {
      logger.warn('Successfully created the admin user.');
      logger.warn('NOTE: Please change the admin users password as soon as possible!');
    } else {
      logger.error('An error occurred while creating the admin user.');
    }
  }
});
