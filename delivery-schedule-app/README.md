# Delivery Schedule App

## Descripción
La aplicación "Delivery Schedule App" es una herramienta diseñada para gestionar repartos a domicilio. Permite a los usuarios anotar repartos por días, meses y años a partir de 2025. La interfaz es intuitiva y fácil de usar, con un diseño atractivo que facilita la navegación.

## Características
- **Inicio de Sesión**: Los usuarios pueden iniciar sesión con diferentes roles:
  - **Administrador**: Acceso completo para gestionar repartos y usuarios. Contraseña: `admin`
  - **Usuario**: Puede ver y gestionar sus propios repartos.
  - **Visitante**: Acceso limitado a la información general.

- **Calendario de Repartos**: Cada día en el calendario permite anotar hasta 12 repartos, facilitando la planificación y organización.

- **Interfaz de Usuario**: La aplicación cuenta con un diseño bonito y botones intuitivos que mejoran la experiencia del usuario.

## Estructura del Proyecto
```
delivery-schedule-app
├── src
│   ├── components
│   │   ├── Calendar.tsx
│   │   ├── Login.tsx
│   │   └── Dashboard.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   ├── Admin.tsx
│   │   └── User.tsx
│   ├── styles
│   │   └── main.css
│   ├── App.tsx
│   └── index.tsx
├── public
│   ├── index.html
│   └── favicon.ico
├── package.json
├── tsconfig.json
└── README.md
```

## Instalación
1. Clona el repositorio:
   ```
   git clone https://github.com/tu_usuario/delivery-schedule-app.git
   ```
2. Navega al directorio del proyecto:
   ```
   cd delivery-schedule-app
   ```
3. Instala las dependencias:
   ```
   npm install
   ```

## Uso
1. Inicia la aplicación:
   ```
   npm start
   ```
2. Accede a la aplicación en tu navegador en `http://localhost:3000`.

## Contribuciones
Las contribuciones son bienvenidas. Si deseas mejorar la aplicación, por favor abre un issue o envía un pull request.

## Licencia
Este proyecto está bajo la Licencia MIT.