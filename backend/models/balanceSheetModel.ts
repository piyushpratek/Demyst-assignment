import mongoose from 'mongoose';

const balanceSheetSchema = new mongoose.Schema({
    businessId: String,
    year: Number,
    month: Number,
    profitOrLoss: Number,
    assetsValue: Number,
});

const BalanceSheet = mongoose.model('BalanceSheet', balanceSheetSchema);

module.exports = BalanceSheet;
