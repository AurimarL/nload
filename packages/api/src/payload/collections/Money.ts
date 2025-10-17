import type { CollectionConfig } from "payload"

export const Money: CollectionConfig = {
    slug: 'money',
    labels: {
        singular: 'Money',
        plural: 'Money',
    },
    admin: {
        useAsTitle: 'serial',
        defaultColumns: ['type', 'status', 'createdAt'],
    },
    fields: [
        {
            name: 'type',
            type: 'select',
            options: ["50", "100", "200", "500", "1000", "2000", "5000"],
            required: true,
        },
        {
            name: 'serial',
            type: 'text',
            unique: true,
            required: true,
        },
        {
            name: 'status',
            type: 'select',
            options: [
                { label: 'In circulation', value: 'CIRCULATION' },
                { label: 'In reserve', value: 'RESERVE' },
                { label: 'Destroyed', value: 'DESTROYED' },
            ],
            defaultValue: 'RESERVE',
        }
    ],
}

