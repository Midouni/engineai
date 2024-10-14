import createTable from "./createDb";
import insertData from "./addData";

const run = async () => {
  try {
    console.log("Starting the database setup...");

    await createTable();
    console.log("Table created successfully.");

    await insertData();
    console.log("Data inserted successfully.");

    console.log("Script completed successfully!");
  } catch (error) {
    console.error("An error occurred during the script execution:");
    console.error(error);
  }
};

run();
