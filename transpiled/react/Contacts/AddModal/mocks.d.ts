export namespace johnDoeContact {
    const id: string;
    const _id: string;
    const _type: string;
    const _rev: string;
    const address: ({
        formattedAddress: string;
        type: string;
        primary: boolean;
        pobox?: undefined;
        street?: undefined;
        city?: undefined;
        region?: undefined;
        country?: undefined;
        postcode?: undefined;
    } | {
        pobox: string;
        street: string;
        city: string;
        region: undefined;
        country: string;
        postcode: string;
        type: string;
        formattedAddress?: undefined;
        primary?: undefined;
    })[];
    const email: ({
        address: string;
        type: string;
        primary: boolean;
    } | {
        address: string;
        primary: boolean;
        type?: undefined;
    })[];
    const impp: ({
        uri: string;
        protocol: string;
        label: string;
        primary: boolean;
    } | {
        uri: string;
        protocol: string;
        label: string;
        primary?: undefined;
    })[];
    const birthday: string;
    const birthplace: string;
    const gender: string;
    const company: string;
    const jobTitle: string;
    const cozy: {
        type: string;
        primary: boolean;
        url: string;
    }[];
    const fullname: string;
    namespace name {
        const givenName: string;
        const familyName: string;
        const additionalName: string;
    }
    namespace metadata {
        const cozy_1: boolean;
        export { cozy_1 as cozy };
        export const version: number;
    }
    const note: string;
    const phone: ({
        number: string;
        primary: boolean;
        label?: undefined;
        type?: undefined;
    } | {
        label: string;
        number: string;
        primary: boolean;
        type: string;
    })[];
}
export namespace johnDoeFormValues {
    const birthday_1: string;
    export { birthday_1 as birthday };
    const birthplace_1: string;
    export { birthplace_1 as birthplace };
    const gender_1: string;
    export { gender_1 as gender };
    const cozy_2: string;
    export { cozy_2 as cozy };
    export const cozyLabel: string;
    export const matrix: string;
    const address_1: ({
        fieldId: string;
        address: string;
        addressLabel: string;
        addressapartment: undefined;
        addressbuilding: undefined;
        addresscity: undefined;
        addresscode: undefined;
        addressregion: undefined;
        addresscountry: undefined;
        addressentrycode: undefined;
        addressfloor: undefined;
        addresslocality: undefined;
        addressnumber: undefined;
        addressstairs: undefined;
        addressstreet: string;
    } | {
        fieldId: string;
        address: string;
        addressLabel: string;
        addressapartment: undefined;
        addressbuilding: undefined;
        addresscity: string;
        addressregion: undefined;
        addresscode: string;
        addresscountry: string;
        addressentrycode: undefined;
        addressfloor: undefined;
        addresslocality: undefined;
        addressnumber: undefined;
        addressstairs: undefined;
        addressstreet: string;
    })[];
    export { address_1 as address };
    const email_1: ({
        fieldId: string;
        email: string;
        emailLabel: undefined;
    } | {
        fieldId: string;
        email: string;
        emailLabel: string;
    })[];
    export { email_1 as email };
    const phone_1: ({
        fieldId: string;
        phone: string;
        phoneLabel: undefined;
    } | {
        fieldId: string;
        phone: string;
        phoneLabel: string;
    })[];
    export { phone_1 as phone };
    const givenName_1: string;
    export { givenName_1 as givenName };
    const additionalName_1: string;
    export { additionalName_1 as additionalName };
    const familyName_1: string;
    export { familyName_1 as familyName };
    const company_1: string;
    export { company_1 as company };
    const jobTitle_1: string;
    export { jobTitle_1 as jobTitle };
    const note_1: string;
    export { note_1 as note };
    export const relatedContact: {
        relatedContactId: string;
        relatedContactLabel: string;
    }[];
}
export namespace johnDoeContactWithRelated {
    const id_1: string;
    export { id_1 as id };
    const _id_1: string;
    export { _id_1 as _id };
    const _type_1: string;
    export { _type_1 as _type };
    const _rev_1: string;
    export { _rev_1 as _rev };
    const address_2: ({
        formattedAddress: string;
        type: string;
        primary: boolean;
        pobox?: undefined;
        street?: undefined;
        city?: undefined;
        region?: undefined;
        country?: undefined;
        postcode?: undefined;
    } | {
        pobox: string;
        street: string;
        city: string;
        region: undefined;
        country: string;
        postcode: string;
        type: string;
        formattedAddress?: undefined;
        primary?: undefined;
    })[];
    export { address_2 as address };
    const impp_1: {
        uri: string;
        protocol: string;
        label: string;
        primary: boolean;
    }[];
    export { impp_1 as impp };
    const email_2: ({
        address: string;
        type: string;
        primary: boolean;
    } | {
        address: string;
        primary: boolean;
        type?: undefined;
    })[];
    export { email_2 as email };
    const birthday_2: string;
    export { birthday_2 as birthday };
    const birthplace_2: string;
    export { birthplace_2 as birthplace };
    const gender_2: string;
    export { gender_2 as gender };
    const company_2: string;
    export { company_2 as company };
    const jobTitle_2: string;
    export { jobTitle_2 as jobTitle };
    const cozy_3: {
        type: string;
        primary: boolean;
        url: string;
    }[];
    export { cozy_3 as cozy };
    const fullname_1: string;
    export { fullname_1 as fullname };
    export namespace name_1 {
        const givenName_2: string;
        export { givenName_2 as givenName };
        const familyName_2: string;
        export { familyName_2 as familyName };
        const additionalName_2: string;
        export { additionalName_2 as additionalName };
    }
    export { name_1 as name };
    export namespace metadata_1 {
        const cozy_4: boolean;
        export { cozy_4 as cozy };
        const version_1: number;
        export { version_1 as version };
    }
    export { metadata_1 as metadata };
    const note_2: string;
    export { note_2 as note };
    const phone_2: {
        number: string;
        primary: boolean;
    }[];
    export { phone_2 as phone };
    export namespace relationships {
        namespace accounts {
            const data: never[];
        }
        namespace groups {
            const data_1: never[];
            export { data_1 as data };
        }
        namespace related {
            const data_2: {
                metadata: {
                    relationTypes: string[];
                };
                _id: string;
                _type: string;
            }[];
            export { data_2 as data };
        }
    }
    export namespace related_1 {
        export namespace target {
            const id_2: string;
            export { id_2 as id };
            const _id_2: string;
            export { _id_2 as _id };
            const _type_2: string;
            export { _type_2 as _type };
            const _rev_2: string;
            export { _rev_2 as _rev };
            const company_3: string;
            export { company_3 as company };
            const fullname_2: string;
            export { fullname_2 as fullname };
            export const me: boolean;
            const note_3: string;
            export { note_3 as note };
        }
        const name_2: string;
        export { name_2 as name };
        export const doctype: string;
        const data_3: {
            displayName: string;
            _id: string;
            _type: string;
        }[];
        export { data_3 as data };
    }
    export { related_1 as related };
}
