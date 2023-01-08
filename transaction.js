export default class Transaction {
    constructor(bedrag, zender, ontvanger) {
        this.bedrag = bedrag;
        this.zender = zender;
        this.ontvanger = ontvanger;
    }
    print() {
        console.log(`${this.zender} sent ${this.bedrag} bits to ${this.ontvanger}`);
    }
}
