# Apulia

## Descrizione del Progetto

Il progetto Apulia è strutturato in due parti principali:
- **Frontend**: Applicativo Vue.js
- **Backend**: API sviluppate in due modi distinti:
  1. **Lumen API**: Collegate a MySQL, con creazione di migration, seed e univocità sulle tabelle
  2. **Node API**: Utilizza Express.js con Mongoose e un database non relazionale

## Lumen

1. Naviga nella cartella `lumen`:
    ```bash
    cd lumen
    ```
2. Crea un file `.env`:
    ```bash
    cp .env.example .env
    ```
3. Dopo aver installato le dipendenze tramite Composer e configurato il file `.env`, puoi:
    - Generare le tabelle con:
      ```bash
      php artisan migrate
      ```
    - Popolare le tabelle con:
      ```bash
      php artisan db:seed
      ```
    - Avviare il server con:
      ```bash
      php -S localhost:8001 -t public
      ```

## Vue.js

1. Naviga nella cartella `vuejs`:
    ```bash
    cd vuejs
    ```
2. Crea un file `.env`:
    ```bash
    cp .env.example .env
    ```
3. Configura gli endpoint per le API nel file `.env`.
4. Installa le dipendenze con:
    ```bash
    npm install
    ```
5. Avvia il progetto con:
    ```bash
    npm run serve
    ```

## Node.js

1. Naviga nella cartella `nodejs`:
    ```bash
    cd nodejs
    ```
2. Crea un file `.env`:
    ```bash
    cp .env.example .env
    ```
3. Configura l'URL di connessione a MongoDB nel file `.env`.
4. Installa le dipendenze con:
    ```bash
    npm install
    ```
5. Inserisci i dati di esempio nel database con:
    ```bash
    npm run insertData
    ```
6. Avvia il progetto con:
    ```bash
    npm run start
    ```

## MySQL

Per creare la struttura del database MySQL, sono state create tre tabelle:
- `projects`
- `employees`
- `project_employees` (tabella pivot che unisce le altre due tabelle)

La tabella `project_employees` ha un indice di univocità sui campi `project_id`, `employee_id`, e `date`, per garantire che ogni giorno sia inserita una sola riga di database legata al progetto e dipendente.

## MongoDB

È stata creata una collezione `projectemployees` con i documenti come nell'esempio, senza ulteriori collezioni. Questo mostra le differenze tra i database relazionali e non relazionali. Anche se MongoDB è meno strutturato, non è inferiore a MySQL; la scelta del database dipende dalle esigenze del progetto.

## Note

Le query effettuate tramite Lumen (MySQL) e Node (MongoDB) restituiscono gli stessi risultati. Si può osservare che con Eloquent (Lumen), che supporta i modelli relazionali, le query sono più facili da scrivere e richiedono meno codice rispetto a MongoDB, che, avendo un'unica collezione per tutti i dati, può risultare più complesso.

## Miglioramenti Futuri

- Rimuovere il bypass del CORS per motivi di sicurezza.
- Implementare una forma di autenticazione, come BASIC AUTH.
- Containerizzare i progetti utilizzando Docker per semplificare l'ambiente di sviluppo locale.
- Migliorare la struttura del progetto Node.js, ad esempio aggiungendo un file di routing.

## Tempo di Lavorazione dell'Intero Progetto

8 ore
