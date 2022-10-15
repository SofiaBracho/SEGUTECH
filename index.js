// Basic connection
const { Pool } = require('pg');

const config = {
    host: 'localhost',
    user: 'postgres',
    password: '123456789',
    database: 'postgres'
};
const path = require('path')
//refrescar html y js
 if (process.env.NODE_ENV !== 'production') {
     require ( 'electron-reload' ) ( __dirname, )
 };
const pool = new Pool(config);

const getBooks = async () => {
    try {
        const res = await pool.query('select * from clientes');
        // console.log(res)
        console.log(res.rows);      
        pool.end();
    } catch (e) {
        console.log(e);
    }
};

const insertUser = async () => {
    try {
        const text = 'INSERT INTO users(username, password) VALUES ($1, $2)';
        const values = ['john', 'john1234'];

        const res = await pool.query(text, values);
        console.log(res)
        pool.end();
    } catch (e) {
        console.log(e);
    }
};
const deleteUser = async () => {
    try {
        const text = 'DELETE FROM users WHERE username = $1';
        const value = ['john'];
        const res = await pool.query(text, value);
        console.log(res)
        pool.end();
    } catch (e) {
        console.log(e);
    }
};

const editUser = async () => {
    const text = 'UPDATE users SET username = $1 WHERE username = $2';;
    const values = ['John', 'ryan'];
    const res = await pool.query(text, values);
    console.log(res)
    pool.end();
};

getBooks();

// Conexión al index.html y creación de la barra de navegación

const { app, BrowserWindow, Menu } = require('electron')
const  electronReload  =  require ( 'electron-reload' )

const url = require('url') 
const createWindow = () => { 
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
   mainWindow.loadFile('index.html') 
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {   
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
  //menu y submenu de archivos
    const mainMenu = Menu.buildFromTemplate(menu1);
    Menu.setApplicationMenu(mainMenu); 

    const mainMenu2 = Menu.buildFromTemplate(menu2);
    Menu.setApplicationMenu(mainMenu2); 
 
});

function nuevaVentana(){
    
}



const menu1 = [
    {
        label: 'Archivo',
        submenu: [
            {
                label:'Nuevos Clientes',
                accelerator: 'Ctrl+N',
                click() {

                }                
            },
            {
                label:'Nuevos Empleados',
                accelerator: 'Ctrl+E'                
            },
            {
                label:'Respaldo de Información',
                accelerator: 'Ctrl+R'                
            },
            {
                label:'Salir',
                accelerator: 'Ctrl+Esc'                
            }
        ]
    },
    {
        label: 'Consultas',
        submenu: [
            {
                label:'Empleados',
                accelerator: 'Ctrl+N'                
            },
            {
                label:'Clientes',
                accelerator: 'Ctrl+E'                
            },
            {
                label:'Guardias',
                accelerator: 'Ctrl+R'
            }
        ]
    },
    {
        label: 'Nómina',
        submenu: [
            {
                label:'Consultar',
                accelerator: 'Ctrl+N'
            },

            {
                label:'Modificar',
                accelerator: 'Ctrl+E'
            },
        ]
    },

    {
        label: 'Acerca de...',
        submenu: [
            {
                label:'Ayuda',
                accelerator: 'Ctrl+N'                
            },
            {
                label:'02',
                accelerator: 'Ctrl+E'                
            },
        ]
    }
];  





