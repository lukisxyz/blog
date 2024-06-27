---
title: 'Get Started Today: Building a Web App with Google Sheets as Your Database'
description: 'Using google sheet on my web application as database, how to do it?'
pubDate: 'Jun 27 2024'
heroImage: 'https://lh3.googleusercontent.com/AC_sTRq6oYXQFRkMdUy0c98PrlLxqV94rZIoMj2Osa1oG_s-b9wL1s29PA8Nkz90X0BEfV14n2iI-7EqFfHrBvW0ag1crQBeMSPojA=e365-pa-nu-rw-w738'
---

## A Database
Besides the usual suspects like MySQL, Postgres and those BaaS (Backend-as-a-Service) things like supabase, turso, and firebase, Google Sheets can actually be a pretty neat way to store your data. It's perfect for keeping track of simpler stuff, like your contact list or what's left in the office pantry.

The best part? Google Sheets is super easy to use, lets you work on stuff with others at the same time, and it's free (at least the basic version). All you gotta do is create a new spreadsheet, set up the columns for your data, and then you can just start filling it in and managing it however you like. Of course, there's a catch: Google Sheets isn't exactly built for handling massive amounts of super complicated data. If that's what you need, then sticking with the traditional databases like MySQL or PostgreSQL is the way to go. 

## Read Data From Google Sheet Using Apps Script
Google Sheets, while powerful for basic data management, offers limited automation capabilities. This is where Apps Script comes in – a scripting platform integrated with Google Sheets that allows you to extend its functionality and automate tasks. With Apps Script, you can access, manipulate, and even create custom functions for your Google Sheet data.

**Accessing and Retrieving Data**

1. **Setting Up:** Open your Google Sheet and navigate to **Extensions > Apps Script**. This opens the Apps Script editor where you'll write your code.
2. **Accessing Spreadsheet:** Use the `SpreadsheetApp` service to access the specific spreadsheet you want to work with:

```javascript
var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
```
3. **Getting the Sheet:** Once you have the spreadsheet object, use `getSheetByName` to access a specific sheet within it:

```javascript
var sheet = spreadsheet.getSheetByName("SheetName");
```
4. **Retrieving Data:** Now you can leverage various methods to retrieve data from the sheet:

  - **Get All Data:** Retrieve all data within a specified range using `getDataRange` and then `getValues`:

    ```javascript
    var dataRange = sheet.getDataRange();
    var data = dataRange.getValues();
    ```
  - **Get Specific Range:** Target a specific range using `getRange` and then retrieve its values:

    ```javascript
    var dataRange = sheet.getRange("A1:C10");
    var data = dataRange.getValues();
    ```
  - **Get Specific Cell Value:** Access the value of a single cell using `getRange` and then `getValue`:

    ```javascript
    var value = sheet.getRange("A1").getValue();
    ```

**Modifying Data (Optional)**

Apps Script also allows you to modify data within your sheet:

1. **Write to a Cell:** Update the value of a specific cell using `getRange` and then `setValue`:

    ```javascript
    sheet.getRange("A1").setValue("New Value");
    ```
2. **Write to a Range:** Update a range of cells using `getRange` and then `setValues`:

    ```javascript
    var dataRange = sheet.getRange("A1:C10");
    dataRange.setValues([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    ```

**Saving and Running**

1. **Save and Name:** Save your script and assign a meaningful name for future reference.
2. **Run the Script:** Click the **Run** button or use the **Run** menu to execute your script.

**Additional Notes**

- For complex data manipulation, consider using the `Utilities` service to convert data between JSON and spreadsheet formats.
- Explore the extensive Apps Script documentation and examples for further guidance.
- Leverage triggers to automatically run your scripts based on specific events, like new data being added to the sheet.

By harnessing the power of Apps Script, you can unlock Google Sheets' full potential for data management and automation tasks, streamlining your workflow and extending the capabilities of your spreadsheets.

## More Than Read Data?
Apps Script empowers you to modify data directly within your Google Sheets. Update cell values with `setValue`, write to ranges using `setValues`, or insert and delete rows/columns with methods like `insertRowBefore` and `deleteColumn`. You can even clear cell contents using `clearContent`. This scripting power allows you to automate data editing tasks, saving you time and ensuring consistency in your spreadsheets. 

**Editing Cell Values:**

* **Update a Single Cell:** Use `getRange` to target the cell and `setValue` to modify its content:

```javascript
sheet.getRange("A1").setValue("New Value");
```

* **Update a Range of Cells:** Employ `getRange` to specify the range and `setValues` to provide a two-dimensional array containing the new values:

```javascript
var dataRange = sheet.getRange("A1:C3");
dataRange.setValues([
  ["Updated Value 1", "Updated Value 2", "Updated Value 3"],
  ["New Row 1", "New Row 2", "New Row 3"],
]);
```

**Inserting and Deleting Data:**

* **Insert Rows or Columns:** Utilize the `insertRowBefore` or `insertColumnBefore` methods to insert new rows or columns at a specific index.

```javascript
sheet.insertRowBefore(2); // Insert a new row before row 2
sheet.insertColumnBefore(1); // Insert a new column before column 1
```

* **Delete Rows or Columns:** Employ the `deleteRow` or `deleteColumn` methods to remove rows or columns.

```javascript
sheet.deleteRow(5); // Delete row 5
sheet.deleteColumn(4); // Delete column 4
```

**Clearing Cell Contents:**

* **Clear a Single Cell:** Use `getRange` to target the cell and `clearContent` to remove its value and formatting.

```javascript
sheet.getRange("B5").clearContent();
```

* **Clear a Range of Cells:** Employ `getRange` to specify the range and `clearContent` to remove all values and formatting within that range.

```javascript
var dataRange = sheet.getRange("C1:E7");
dataRange.clearContent();
```

**Additional Considerations:**

- Remember to save your script after making changes.
- For complex editing scenarios, consider using loops and conditional statements to automate the process based on specific criteria.
- Explore the Apps Script documentation for detailed information on these methods and additional functionalities for data manipulation in Google Sheets.

By leveraging these techniques, you can effectively edit the contents of your Google Sheets using Apps Script, streamlining your data management tasks and automating repetitive editing processes.
