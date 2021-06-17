import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hapiserver1',
    password: 'password',
    database: 'buy-and-sell',
    port: 4000
});

export const db = {
    connect: () => connection.connect(),
    query: (queryString, escapedValues) =>
        new Promise((resolve, reject) => {
            connection.query(queryString, escapedValues, (error, results, fields) => {
                if (error) reject(error);
                resolve({ results, fields });
            })
        }),
    end: () => connection.end(),
}