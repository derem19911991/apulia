# apulia

APULIA PROJECT

Il progetto è strutturato in 2 diversi modi:
il frontend è un applicativo vuejs, mentre le rest api sono fatte in 2 diversi modi:
1. Lumen API - collegate a Mysql, con la creazione di migration,seed e univocità sulle tabelle
2. Node  API - con l'utilizzo di express.js, con l'aiuto di mongoose e relazioni ad un database non relazionale

LUMEN
cd lumen
cp .env.example .env
da questa cartella dopo aver installato tramite compose e configurato il file .env,
si puo lanciare il comando php artisan migrate per generare le tabelle
php artisan db:seed per popolare le voci delle tabelle
php -S localhost:8001 -t public

VUEJS
cd vuejs
cp .env.example .env
nel file .env si possono configurare i 2 endpoint per le diverse API
npm i
npm run serve per fare partire il progetto
NODE
cd nodejs
cp .env.example .env
nel file .env si puo inserire la url di connessione a mongodb
npm i
npm run insertData: lanciando questo comando si puo inserire nel database il json di esempio nella collezione projectemployees
npm run start per fare partire il progetto

MYSQL
Per creare la struttura del database mysql si è scelto di creare tre tabelle projects,employees e project_employees.
la tabella project_employees è una tabella pivot che unisce le altre 2 tabelle, ed è stato inserito un
indice di univocità per i campi project_id,employee_id,date, affinche si possa inserire per ogni giorno una sola riga
di database legata al progetto ed dipendente.

MONGODB
si è creata una collezione projectemployees, dove è stato inserito il documento cosi come nell'esempio senza creare ulteriori collezioni.
Questo per evidenziare e mostrare eventuali differenze di programmazione tra un database e l'altro.
Ovviamente si sarebbe potuto fare un lavoro uguale a mysql con 3 differenti collezioni, aggiungendo projects ed employees.

NOTE
Entrambe le query fatte sia tramite lumen(mysql) e node(mongodb) restituiscono i stessi risultati.
Si puo vedere anche dal codice come con lumen e utilizzando eloquent che supporta i modelli relazionali, fare delle query
simili a quelle richieste risulta molto piu facile, scrivendo meno codice.
A differenza invece di mongodb, che avendo inserito in un'unica collezione tutti i dati ha portato ad una complessità maggiore 
nell'elaborazione della query.
Questo non vuol dire che mongodb sia peggio di mysql, in quanto in questo caso si è fatta una scelta "forzata" di effettuare 2 
strutture di database differenti, ma fa notare come una buona struttura di database può portare poi a dei vantaggi significativi nella scrittura di codice.

EVENTUALI MIGLIORIE
per velocizzare il tutto si è deciso di bypassare il CORS. quindi andrebbe rimosso per questioni di sicurezza.
aggiungere un eventuale BASIC AUTH o altro tipo di autenticazioni per poter effettuare la chiamata.
Containerizzare i 3 progetti in un docker, questo aiuterebbe soprattutto quando si lavora in locale.
Strutturare il progetto nodejs ancora meglio,aggiungendo un file di routing ad esempio.

TEMPO DI LAVORAZIONE DELL'INTERO PROGETTO 
8 ORE 