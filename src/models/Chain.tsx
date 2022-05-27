export class Chain {
    NETWORK_NAME: string = "";
    CHAIN_NAME: string = "";
    NFT_MARKETPLACE_ADDRESS: string = "";
    NFT_ADDRESS: string = "";
    IS_MAIN_NET: string = "";
    LOGO_URL: string = "";
    CHAIN_ID: string = "";
    BLOCK_EXPLORER_URL: string = "";
    RPC_PROVIDER_URL: string = "";

    public constructor(props: Chain) {
        Object.assign(this, props);
    }

    getChainFullName = () => {
        return `${this.CHAIN_NAME}${this.IS_MAIN_NET ? "" : ' ('+this.NETWORK_NAME + ')'}`
    }
}