# RelatosPapelFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Pasos para ci/cd

## Instalacion
 
sudo apt update && sudo apt install -y curl git nginx
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g @angular/cli

## Verificacion 

node -v
ng version


## configuracion 

sudo nano /etc/nginx/sites-available/default

location / {
    root /var/www/angular-app;
    index index.html;
    try_files $uri $uri/ /index.html;
}

sudo systemctl restart nginx

## Carpeta de despliegue 

sudo mkdir -p /var/www/angular-app
sudo chown -R ubuntu:ubuntu /var/www/angular-app

## ✅ 5. Agrega tu clave SSH en GitLab/GitHub
Genera una clave si no la tienes: ssh-keygen -t ed25519

Copia la privada a tu CI/CD (Settings > CI/CD > Variables)

Agrega la pública a ~/.ssh/authorized_keys en EC2.


