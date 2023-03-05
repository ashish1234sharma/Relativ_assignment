import BITCOIN from './assets/bitcoin.png'
import BINANCE from './assets/binance.png'
import SHIB from './assets/shib.png'
import SOLANA from './assets/solana.png'
import ETHERIUM from './assets/Ethereum.png'
export const CardData=[
    {
        id:1,
        icon:BITCOIN,
        crypto:'Bitcoin',
        sortName:'BTC',
        price:'31,812.80',
        performance:'18',
        performance_status:'positive',
        pvl:'60,000',
        popular_pair:[SOLANA,ETHERIUM,BINANCE]
    },
    {
        id:2,
        icon:ETHERIUM,
        crypto:'Etherum',
        sortName:'ETH',
        price:'1,466.45',
        performance:'11.93',
        performance_status:'negative',
        pvl:'60,000',
        popular_pair:[SOLANA,BITCOIN,BINANCE]
    },
    {
        id:3,
        icon:SOLANA,
        crypto:'Solana',
        sortName:'SOL',
        price:'32.83',
        performance:'12.32',
        performance_status:'negative',
        pvl:'60,000',
        popular_pair:[BITCOIN,ETHERIUM,BINANCE]
    },
    {
        id:4,
        icon:BINANCE,
        crypto:'Binance USD',
        sortName:'BUSD',
        price:'1.00',
        performance:'0.26',
        performance_status:'positive',
        pvl:'60,000',
        popular_pair:[SOLANA,ETHERIUM,BINANCE]
    },
    {
        id:5,
        icon:SHIB,
        crypto:'Shiba Inu',
        sortName:'SHIB',
        price:'0.00000001948',
        performance:'8.1',
        performance_status:'negative',
        pvl:'60,000',
        popular_pair:[SOLANA,ETHERIUM,BINANCE]
    }
]