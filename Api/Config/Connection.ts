const mongoose = require("mongoose");
const dotenv = require("dotenv");
import { CosmosClient } from "@azure/cosmos";

const key = process.env.COSMOS_KEY;
const endpoint = process.env.COSMOS_URI;
const databaseName = "ToDoList"

dotenv.config();

const client = new CosmosClient({ endpoint, key });

const cosmosConnection = async () => {
    const { database } = await client.databases.createIfNotExists({ id: databaseName });
    // const { container } = await database.containers.createIfNotExists({ id: "Teachers" });
    // console.log(container.id);
}

const containers = {
    Users: client.database(databaseName).container("Users"),
    Posts: client.database(databaseName).container("Posts"),
}

module.exports = { cosmosConnection, containers };