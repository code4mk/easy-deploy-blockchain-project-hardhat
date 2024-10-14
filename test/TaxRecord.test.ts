import { expect } from "chai";
import { ethers } from "hardhat";
import { TaxRecord } from "../typechain-types";
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";

describe("TaxRecord", function () {
  let taxRecord: TaxRecord;
  let owner: HardhatEthersSigner;

  beforeEach(async function () {
    [owner] = await ethers.getSigners();
    const TaxRecordFactory = await ethers.getContractFactory("TaxRecord");
    taxRecord = await TaxRecordFactory.deploy();
    await taxRecord.waitForDeployment();
  });

  it("Should add a new record", async function () {
    await taxRecord.addRecord("John Doe", 1000);
    const record = await taxRecord.getRecord(1);
    expect(record.id).to.equal(1);
    expect(record.name).to.equal("John Doe");
    expect(record.amount).to.equal(1000);
  });

  it("Should get all records", async function () {
    await taxRecord.addRecord("John Doe", 1000);
    await taxRecord.addRecord("Jane Doe", 2000);
    const records = await taxRecord.getAllRecords();
    expect(records.length).to.equal(2);
  });

  it("Should delete a record", async function () {
    await taxRecord.addRecord("John Doe", 1000);
    await taxRecord.deleteRecord(1);
    await expect(taxRecord.getRecord(1)).to.be.revertedWith("Record does not exist");
  });
});