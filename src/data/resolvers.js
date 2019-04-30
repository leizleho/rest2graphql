import { Contacts } from './dbConnectors';

export const resolvers = {
  Query: {
    getContacts: () => {
      return Contacts.find();
    }
  },

  Mutation: {
    createContact: (root, { input }) => {
      const newContact = new Contacts({
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        company: input.company
      });

      newContact.id = newContact._id;

      return new Promise((resolve, object) => {
        newContact.save(err => {
          if (err) reject(err);
          else resolve(newContact);
        });
      });
    }
  }
};
