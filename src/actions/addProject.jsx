export const CREATE_NEW_CONTACT = 'CREATE_NEW_CONTACT';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';

export const createContact = (contact) => {
    return {
        type: CREATE_NEW_CONTACT,
        contact: contact
    }
};

export const deleteContact = (id) => {
    return {
        type: REMOVE_CONTACT,
        id: id
    }
};
