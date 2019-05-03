import { Contacts } from './dbConnectors';

export const resolvers = {
  Query: {
    getContacts: () => {
      return Contacts.find();
    },
    getOneContact: (root, { id }) => {
      return new Promise((resolve, object) => {
        Contacts.findById(id, (err, contact) => {
          if (err) reject(err);
          else resolve(contact);
        });
      });
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
    },
    updateContact: (root, { input }) => {
      return new Promise((resolve, object) => {
        Contacts.findOneAndUpdate(
          { _id: input.id },
          input,
          { new: true },
          (err, contact) => {
            if (err) reject(err);
            else resolve(contact);
          }
        );
      });
    }
  }
};
