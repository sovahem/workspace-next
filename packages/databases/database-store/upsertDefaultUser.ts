const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const users = [
    {
        name: 'xstore',
        email: 'admin@xstore.com',
        password: 'emineas*segmentis',
    },
];

const upsertDefaultUser = async () => {
    const prisma = new PrismaClient();
    try {
        const promises = users.map(async (user) => {
            return prisma.user.upsert({
                where: { id: '' },
                update: {
                    ...user,
                    password: await bcrypt.hash(user.password, 10),
                },
                create: {
                    ...user,
                    password: await bcrypt.hash(user.password, 10),
                },
            });
        });
        const res = await Promise.all(promises);
    } catch (e) {
        console.error(e);
    }
};

upsertDefaultUser();
