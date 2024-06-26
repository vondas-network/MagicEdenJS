# MagicEdenJS


<h3 align="center">
  <img height="50%" width="50%" src="https://github.com/vondas-network/MagicEdenJS/blob/main/img/MagicEdenJS-logo-1.png?raw=true"/>
</h3>

An API service for sourcing Rare Sats and Bitcoin Ordinal listing data from Magic Eden. 

## What can this service do?
* Aggregate Rare Sats listings on Magic Eden and filter by *sat type*
* Aggregate Bitcoin Ordinal listings on Magic Eden and filter using a *time interval*
* Load API image on another computer and *schedule* requests* with cron

## How does it work?

### Build & Run Docker Image
1. Build the Docker image
	* ```docker build -t magicedenjs-api .```

2. Run Docker image
	* ```docker run -p 7100:7100 -v FILE_DIRECTORY_FOR_SAVING_FILES:/app/tmp magicedenjs-api:latest```

---

### Load Docker Image

1. Load Docker image
	* ```docker load -i magicedenjs-api_latest.tar.gz```

2. Run Docker image
	*  ```docker run -p 7100:7100 -v FILE_DIRECTORY_FOR_SAVING_FILES:/app/tmp magicedenjs-api:latest```

---

### Local install
1. Install dependencies
	* ``` npm i ```

2. Start project
	* ```node app.js ```


## API Functions


### processBtcListings

<h3 align="center">
  <img height="100%" width="100%" src="https://github.com/vondas-network/MagicEdenJS/blob/main/img/MagicEdenJS-BitcoinOrdinalListings.png?raw=true"/>
</h3>

#### Endpoint
```
 /magiceden/process-btc-listings
```

#### Parameters

* timeInterval
	* 10m
	* 1h
	* 6h
	* 1d
	* 7d
	* 30d

#### Example
``` bash
/magiceden/process-btc-listings?timeInterval=10m

```

#### Response
``` json
[
    {
        "chain": "bitcoin",
        "collectionId": "nodemonkes",
        "collectionSymbol": "nodemonkes",
        "vol": 0.544,
        "txns": 2,
        "totalVol": 0.544,
        "fp": 0.2439,
        "marketCap": 2439,
        "totalSupply": 10000,
        "ownerCount": 4579,
        "listedCount": 1032,
        "pending": 2,
        "uniqueOwnerRatio": 0.4579,
        "name": "NodeMonkes",
        "image": "https://creator-hub-prod.s3.us-east-2.amazonaws.com/ord-nodemonkes_pfp_1705639827890.png",
        "description": "The first original 10k collection inscribed on bitcoin.",
        "currency": "BTC",
        "currencyUsdRate": 51447.74,
        "marketCapUsd": 125481037.86
    },
    {
        "chain": "bitcoin",
        "collectionId": "quantum_cats",
        "collectionSymbol": "quantum_cats",
        "vol": 0.423,
        "txns": 2,
        "totalVol": 0.423,
        "fp": 0.22,
        "marketCap": 733.26,
        "totalSupply": 3333,
        "ownerCount": 2590,
        "listedCount": 463,
        "pending": 2,
        "uniqueOwnerRatio": 0.7770777077707771,
        "name": "Quantum Cats",
        "image": "https://creator-hub-prod.s3.us-east-2.amazonaws.com/ord-taproot_wizards_presents_pfp_1706542390359.png",
        "description": "The Quantum Cats by Taproot Wizards are on a mission to revive Satoshi's beloved pet and scripting function, OP_CAT.",
        "currency": "BTC",
        "currencyUsdRate": 51447.74,
        "marketCapUsd": 37724569.8324
    },
    {
        "chain": "bitcoin",
        "collectionId": "rmm",
        "collectionSymbol": "rmm",
        "vol": 0.10859,
        "txns": 8,
        "totalVol": 0.10859,
        "fp": 0.0134,
        "listedCount": 400,
        "pending": 6,
        "uniqueOwnerRatio": 0,
        "name": "Rune Mania Miner",
        "image": "https://creator-hub-prod.s3.us-east-2.amazonaws.com/ord-rmm_pfp_1708461604099.png",
        "description": "Rune Mania: Utilize your RMM to mine Runes using:⛏️ Mining Boosts🧱 Block Boosts🧪 Mana Boosts🗿 Stone Boosts ✨ Rune Boosts",
        "currency": "BTC",
        "currencyUsdRate": 51447.74
    },
    ...
]
```

---

### processSatUrl
Search for a specific Rare Sats. Rare Sats are attributes, or "satributes," ascribed to different types of sats. Sats are the smallest unit of a Bitcoin, and satributes commemorate special moments like when a sat was mined or used in a transaction.

<h3 align="center">
  <img height="100%" width="100%" src="https://github.com/vondas-network/MagicEdenJS/blob/main/img/MagicEdenJS-RareSatsListings.png?raw=true"/>
</h3>

#### Endpoint
```
 /magiceden/process-sat-url
```

#### Parameters

* satType
	* Uncommon
	* Rare
	* Epic
	* Legendary
	* Black Uncommon
	* Black Rare
	* Black Epic
	* Black Legendary
	* Palindrome
	* Uniform Palinception
	* Perfect Palinception
	* Vintage
	* Nakamoto
	* Block 9
	* Block 286
	* Block 78
	* First Transaction
	* Pizza
	* Alpha
	* Omega
	* JPEG

#### Example
``` bash
/magiceden/process-sat-url?satType=Rare

```

#### Response
``` json
{
    "Satributes": [
        {
            "value": "Rare",
            "label": "Rare",
            "floor": 4
        }
    ]
}
```

---

## How to save a new Docker image?
1. Build Docker image
	* ```docker build -t magicedenjs-api .```

2. Save Docker image
	* ```docker save magicedenjs-api:latest | gzip > magicedenjs-api_latest.tar.gz```

---

## Cron

* Open *[crontab](https://www.geeksforgeeks.org/crontab-in-linux-with-examples/)*

``` bash
crontab -e
```

* Add a new *job*. Every 10 minutes, create an HTTP GET Request for the API service using cURL.  

``` text 
*/10 * * * * /usr/bin/curl --silent 'http://localhost:7100/magiceden/process-btc-listings?timeInterval=10m'
```
* Optionally, create a second *job* to track the HTTP GET Requests.

``` text
*/10 * * * * echo "JOB at $(date)" >> ~/Desktop/job-tracker.txt
```
