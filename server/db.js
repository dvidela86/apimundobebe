import { createPool } from 'mysql2/promise'

const pool = new createPool({
    host: '154.49.247.204',
    port: '3306',
    user: 'u351071735_machiarri',
    password: 'Trafico01',
    database: 'u351071735_mundobebe'
})

export default pool;