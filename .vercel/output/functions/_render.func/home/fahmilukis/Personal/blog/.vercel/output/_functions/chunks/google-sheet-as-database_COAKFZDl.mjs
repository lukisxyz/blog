import { n as createComponent, o as renderTemplate, p as maybeRenderHead, y as unescapeHTML } from './astro/server_C_K00-1z.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"a-database\">A Database</h2>\n<p>Besides the usual suspects like MySQL, Postgres and those BaaS (Backend-as-a-Service) things like supabase, turso, and firebase, Google Sheets can actually be a pretty neat way to store your data. It’s perfect for keeping track of simpler stuff, like your contact list or what’s left in the office pantry.</p>\n<p>The best part? Google Sheets is super easy to use, lets you work on stuff with others at the same time, and it’s free (at least the basic version). All you gotta do is create a new spreadsheet, set up the columns for your data, and then you can just start filling it in and managing it however you like. Of course, there’s a catch: Google Sheets isn’t exactly built for handling massive amounts of super complicated data. If that’s what you need, then sticking with the traditional databases like MySQL or PostgreSQL is the way to go.</p>\n<h2 id=\"read-data-from-google-sheet-using-apps-script\">Read Data From Google Sheet Using Apps Script</h2>\n<p>Google Sheets, while powerful for basic data management, offers limited automation capabilities. This is where Apps Script comes in – a scripting platform integrated with Google Sheets that allows you to extend its functionality and automate tasks. With Apps Script, you can access, manipulate, and even create custom functions for your Google Sheet data.</p>\n<p><strong>Accessing and Retrieving Data</strong></p>\n<ol>\n<li><strong>Setting Up:</strong> Open your Google Sheet and navigate to <strong>Extensions > Apps Script</strong>. This opens the Apps Script editor where you’ll write your code.</li>\n<li><strong>Accessing Spreadsheet:</strong> Use the <code>SpreadsheetApp</code> service to access the specific spreadsheet you want to work with:</li>\n</ol>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"javascript\"><code><span class=\"line\"><span style=\"color:#F97583\">var</span><span style=\"color:#E1E4E8\"> spreadsheet </span><span style=\"color:#F97583\">=</span><span style=\"color:#E1E4E8\"> SpreadsheetApp.</span><span style=\"color:#B392F0\">getActiveSpreadsheet</span><span style=\"color:#E1E4E8\">();</span></span>\n<span class=\"line\"></span></code></pre>\n<ol start=\"3\">\n<li><strong>Getting the Sheet:</strong> Once you have the spreadsheet object, use <code>getSheetByName</code> to access a specific sheet within it:</li>\n</ol>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"javascript\"><code><span class=\"line\"><span style=\"color:#F97583\">var</span><span style=\"color:#E1E4E8\"> sheet </span><span style=\"color:#F97583\">=</span><span style=\"color:#E1E4E8\"> spreadsheet.</span><span style=\"color:#B392F0\">getSheetByName</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">\"SheetName\"</span><span style=\"color:#E1E4E8\">);</span></span>\n<span class=\"line\"></span></code></pre>\n<ol start=\"4\">\n<li><strong>Retrieving Data:</strong> Now you can leverage various methods to retrieve data from the sheet:</li>\n</ol>\n<ul>\n<li>\n<p><strong>Get All Data:</strong> Retrieve all data within a specified range using <code>getDataRange</code> and then <code>getValues</code>:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"javascript\"><code><span class=\"line\"><span style=\"color:#F97583\">var</span><span style=\"color:#E1E4E8\"> dataRange </span><span style=\"color:#F97583\">=</span><span style=\"color:#E1E4E8\"> sheet.</span><span style=\"color:#B392F0\">getDataRange</span><span style=\"color:#E1E4E8\">();</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">var</span><span style=\"color:#E1E4E8\"> data </span><span style=\"color:#F97583\">=</span><span style=\"color:#E1E4E8\"> dataRange.</span><span style=\"color:#B392F0\">getValues</span><span style=\"color:#E1E4E8\">();</span></span>\n<span class=\"line\"></span></code></pre>\n</li>\n<li>\n<p><strong>Get Specific Range:</strong> Target a specific range using <code>getRange</code> and then retrieve its values:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"javascript\"><code><span class=\"line\"><span style=\"color:#F97583\">var</span><span style=\"color:#E1E4E8\"> dataRange </span><span style=\"color:#F97583\">=</span><span style=\"color:#E1E4E8\"> sheet.</span><span style=\"color:#B392F0\">getRange</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">\"A1:C10\"</span><span style=\"color:#E1E4E8\">);</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">var</span><span style=\"color:#E1E4E8\"> data </span><span style=\"color:#F97583\">=</span><span style=\"color:#E1E4E8\"> dataRange.</span><span style=\"color:#B392F0\">getValues</span><span style=\"color:#E1E4E8\">();</span></span>\n<span class=\"line\"></span></code></pre>\n</li>\n<li>\n<p><strong>Get Specific Cell Value:</strong> Access the value of a single cell using <code>getRange</code> and then <code>getValue</code>:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"javascript\"><code><span class=\"line\"><span style=\"color:#F97583\">var</span><span style=\"color:#E1E4E8\"> value </span><span style=\"color:#F97583\">=</span><span style=\"color:#E1E4E8\"> sheet.</span><span style=\"color:#B392F0\">getRange</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">\"A1\"</span><span style=\"color:#E1E4E8\">).</span><span style=\"color:#B392F0\">getValue</span><span style=\"color:#E1E4E8\">();</span></span>\n<span class=\"line\"></span></code></pre>\n</li>\n</ul>\n<p><strong>Modifying Data (Optional)</strong></p>\n<p>Apps Script also allows you to modify data within your sheet:</p>\n<ol>\n<li>\n<p><strong>Write to a Cell:</strong> Update the value of a specific cell using <code>getRange</code> and then <code>setValue</code>:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"javascript\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">sheet.</span><span style=\"color:#B392F0\">getRange</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">\"A1\"</span><span style=\"color:#E1E4E8\">).</span><span style=\"color:#B392F0\">setValue</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">\"New Value\"</span><span style=\"color:#E1E4E8\">);</span></span>\n<span class=\"line\"></span></code></pre>\n</li>\n<li>\n<p><strong>Write to a Range:</strong> Update a range of cells using <code>getRange</code> and then <code>setValues</code>:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"javascript\"><code><span class=\"line\"><span style=\"color:#F97583\">var</span><span style=\"color:#E1E4E8\"> dataRange </span><span style=\"color:#F97583\">=</span><span style=\"color:#E1E4E8\"> sheet.</span><span style=\"color:#B392F0\">getRange</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">\"A1:C10\"</span><span style=\"color:#E1E4E8\">);</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">dataRange.</span><span style=\"color:#B392F0\">setValues</span><span style=\"color:#E1E4E8\">([[</span><span style=\"color:#79B8FF\">1</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#79B8FF\">2</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#79B8FF\">3</span><span style=\"color:#E1E4E8\">], [</span><span style=\"color:#79B8FF\">4</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#79B8FF\">5</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#79B8FF\">6</span><span style=\"color:#E1E4E8\">], [</span><span style=\"color:#79B8FF\">7</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#79B8FF\">8</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#79B8FF\">9</span><span style=\"color:#E1E4E8\">]]);</span></span>\n<span class=\"line\"></span></code></pre>\n</li>\n</ol>\n<p><strong>Saving and Running</strong></p>\n<ol>\n<li><strong>Save and Name:</strong> Save your script and assign a meaningful name for future reference.</li>\n<li><strong>Run the Script:</strong> Click the <strong>Run</strong> button or use the <strong>Run</strong> menu to execute your script.</li>\n</ol>\n<p><strong>Additional Notes</strong></p>\n<ul>\n<li>For complex data manipulation, consider using the <code>Utilities</code> service to convert data between JSON and spreadsheet formats.</li>\n<li>Explore the extensive Apps Script documentation and examples for further guidance.</li>\n<li>Leverage triggers to automatically run your scripts based on specific events, like new data being added to the sheet.</li>\n</ul>\n<p>By harnessing the power of Apps Script, you can unlock Google Sheets’ full potential for data management and automation tasks, streamlining your workflow and extending the capabilities of your spreadsheets.</p>\n<h2 id=\"more-than-read-data\">More Than Read Data?</h2>\n<p>Apps Script empowers you to modify data directly within your Google Sheets. Update cell values with <code>setValue</code>, write to ranges using <code>setValues</code>, or insert and delete rows/columns with methods like <code>insertRowBefore</code> and <code>deleteColumn</code>. You can even clear cell contents using <code>clearContent</code>. This scripting power allows you to automate data editing tasks, saving you time and ensuring consistency in your spreadsheets.</p>\n<p><strong>Editing Cell Values:</strong></p>\n<ul>\n<li><strong>Update a Single Cell:</strong> Use <code>getRange</code> to target the cell and <code>setValue</code> to modify its content:</li>\n</ul>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"javascript\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">sheet.</span><span style=\"color:#B392F0\">getRange</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">\"A1\"</span><span style=\"color:#E1E4E8\">).</span><span style=\"color:#B392F0\">setValue</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">\"New Value\"</span><span style=\"color:#E1E4E8\">);</span></span>\n<span class=\"line\"></span></code></pre>\n<ul>\n<li><strong>Update a Range of Cells:</strong> Employ <code>getRange</code> to specify the range and <code>setValues</code> to provide a two-dimensional array containing the new values:</li>\n</ul>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"javascript\"><code><span class=\"line\"><span style=\"color:#F97583\">var</span><span style=\"color:#E1E4E8\"> dataRange </span><span style=\"color:#F97583\">=</span><span style=\"color:#E1E4E8\"> sheet.</span><span style=\"color:#B392F0\">getRange</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">\"A1:C3\"</span><span style=\"color:#E1E4E8\">);</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">dataRange.</span><span style=\"color:#B392F0\">setValues</span><span style=\"color:#E1E4E8\">([</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">  [</span><span style=\"color:#9ECBFF\">\"Updated Value 1\"</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#9ECBFF\">\"Updated Value 2\"</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#9ECBFF\">\"Updated Value 3\"</span><span style=\"color:#E1E4E8\">],</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">  [</span><span style=\"color:#9ECBFF\">\"New Row 1\"</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#9ECBFF\">\"New Row 2\"</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#9ECBFF\">\"New Row 3\"</span><span style=\"color:#E1E4E8\">],</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">]);</span></span>\n<span class=\"line\"></span></code></pre>\n<p><strong>Inserting and Deleting Data:</strong></p>\n<ul>\n<li><strong>Insert Rows or Columns:</strong> Utilize the <code>insertRowBefore</code> or <code>insertColumnBefore</code> methods to insert new rows or columns at a specific index.</li>\n</ul>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"javascript\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">sheet.</span><span style=\"color:#B392F0\">insertRowBefore</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#79B8FF\">2</span><span style=\"color:#E1E4E8\">); </span><span style=\"color:#6A737D\">// Insert a new row before row 2</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">sheet.</span><span style=\"color:#B392F0\">insertColumnBefore</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#79B8FF\">1</span><span style=\"color:#E1E4E8\">); </span><span style=\"color:#6A737D\">// Insert a new column before column 1</span></span>\n<span class=\"line\"></span></code></pre>\n<ul>\n<li><strong>Delete Rows or Columns:</strong> Employ the <code>deleteRow</code> or <code>deleteColumn</code> methods to remove rows or columns.</li>\n</ul>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"javascript\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">sheet.</span><span style=\"color:#B392F0\">deleteRow</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#79B8FF\">5</span><span style=\"color:#E1E4E8\">); </span><span style=\"color:#6A737D\">// Delete row 5</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">sheet.</span><span style=\"color:#B392F0\">deleteColumn</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#79B8FF\">4</span><span style=\"color:#E1E4E8\">); </span><span style=\"color:#6A737D\">// Delete column 4</span></span>\n<span class=\"line\"></span></code></pre>\n<p><strong>Clearing Cell Contents:</strong></p>\n<ul>\n<li><strong>Clear a Single Cell:</strong> Use <code>getRange</code> to target the cell and <code>clearContent</code> to remove its value and formatting.</li>\n</ul>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"javascript\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">sheet.</span><span style=\"color:#B392F0\">getRange</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">\"B5\"</span><span style=\"color:#E1E4E8\">).</span><span style=\"color:#B392F0\">clearContent</span><span style=\"color:#E1E4E8\">();</span></span>\n<span class=\"line\"></span></code></pre>\n<ul>\n<li><strong>Clear a Range of Cells:</strong> Employ <code>getRange</code> to specify the range and <code>clearContent</code> to remove all values and formatting within that range.</li>\n</ul>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"javascript\"><code><span class=\"line\"><span style=\"color:#F97583\">var</span><span style=\"color:#E1E4E8\"> dataRange </span><span style=\"color:#F97583\">=</span><span style=\"color:#E1E4E8\"> sheet.</span><span style=\"color:#B392F0\">getRange</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">\"C1:E7\"</span><span style=\"color:#E1E4E8\">);</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">dataRange.</span><span style=\"color:#B392F0\">clearContent</span><span style=\"color:#E1E4E8\">();</span></span>\n<span class=\"line\"></span></code></pre>\n<p><strong>Additional Considerations:</strong></p>\n<ul>\n<li>Remember to save your script after making changes.</li>\n<li>For complex editing scenarios, consider using loops and conditional statements to automate the process based on specific criteria.</li>\n<li>Explore the Apps Script documentation for detailed information on these methods and additional functionalities for data manipulation in Google Sheets.</li>\n</ul>\n<p>By leveraging these techniques, you can effectively edit the contents of your Google Sheets using Apps Script, streamlining your data management tasks and automating repetitive editing processes.</p>";

				const frontmatter = {"title":"Building a Web App with Google Sheets as Your Database","description":"Using google sheet on my web application as database, how to do it?","pubDate":"Jun 27 2024","heroImage":"https://lh3.googleusercontent.com/AC_sTRq6oYXQFRkMdUy0c98PrlLxqV94rZIoMj2Osa1oG_s-b9wL1s29PA8Nkz90X0BEfV14n2iI-7EqFfHrBvW0ag1crQBeMSPojA=e365-pa-nu-rw-w738"};
				const file = "/home/fahmilukis/Personal/blog/src/content/blog/google-sheet-as-database.md";
				const url = undefined;
				function rawContent() {
					return "\n## A Database\nBesides the usual suspects like MySQL, Postgres and those BaaS (Backend-as-a-Service) things like supabase, turso, and firebase, Google Sheets can actually be a pretty neat way to store your data. It's perfect for keeping track of simpler stuff, like your contact list or what's left in the office pantry.\n\nThe best part? Google Sheets is super easy to use, lets you work on stuff with others at the same time, and it's free (at least the basic version). All you gotta do is create a new spreadsheet, set up the columns for your data, and then you can just start filling it in and managing it however you like. Of course, there's a catch: Google Sheets isn't exactly built for handling massive amounts of super complicated data. If that's what you need, then sticking with the traditional databases like MySQL or PostgreSQL is the way to go. \n\n## Read Data From Google Sheet Using Apps Script\nGoogle Sheets, while powerful for basic data management, offers limited automation capabilities. This is where Apps Script comes in – a scripting platform integrated with Google Sheets that allows you to extend its functionality and automate tasks. With Apps Script, you can access, manipulate, and even create custom functions for your Google Sheet data.\n\n**Accessing and Retrieving Data**\n\n1. **Setting Up:** Open your Google Sheet and navigate to **Extensions > Apps Script**. This opens the Apps Script editor where you'll write your code.\n2. **Accessing Spreadsheet:** Use the `SpreadsheetApp` service to access the specific spreadsheet you want to work with:\n\n```javascript\nvar spreadsheet = SpreadsheetApp.getActiveSpreadsheet();\n```\n3. **Getting the Sheet:** Once you have the spreadsheet object, use `getSheetByName` to access a specific sheet within it:\n\n```javascript\nvar sheet = spreadsheet.getSheetByName(\"SheetName\");\n```\n4. **Retrieving Data:** Now you can leverage various methods to retrieve data from the sheet:\n\n  - **Get All Data:** Retrieve all data within a specified range using `getDataRange` and then `getValues`:\n\n    ```javascript\n    var dataRange = sheet.getDataRange();\n    var data = dataRange.getValues();\n    ```\n  - **Get Specific Range:** Target a specific range using `getRange` and then retrieve its values:\n\n    ```javascript\n    var dataRange = sheet.getRange(\"A1:C10\");\n    var data = dataRange.getValues();\n    ```\n  - **Get Specific Cell Value:** Access the value of a single cell using `getRange` and then `getValue`:\n\n    ```javascript\n    var value = sheet.getRange(\"A1\").getValue();\n    ```\n\n**Modifying Data (Optional)**\n\nApps Script also allows you to modify data within your sheet:\n\n1. **Write to a Cell:** Update the value of a specific cell using `getRange` and then `setValue`:\n\n    ```javascript\n    sheet.getRange(\"A1\").setValue(\"New Value\");\n    ```\n2. **Write to a Range:** Update a range of cells using `getRange` and then `setValues`:\n\n    ```javascript\n    var dataRange = sheet.getRange(\"A1:C10\");\n    dataRange.setValues([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);\n    ```\n\n**Saving and Running**\n\n1. **Save and Name:** Save your script and assign a meaningful name for future reference.\n2. **Run the Script:** Click the **Run** button or use the **Run** menu to execute your script.\n\n**Additional Notes**\n\n- For complex data manipulation, consider using the `Utilities` service to convert data between JSON and spreadsheet formats.\n- Explore the extensive Apps Script documentation and examples for further guidance.\n- Leverage triggers to automatically run your scripts based on specific events, like new data being added to the sheet.\n\nBy harnessing the power of Apps Script, you can unlock Google Sheets' full potential for data management and automation tasks, streamlining your workflow and extending the capabilities of your spreadsheets.\n\n## More Than Read Data?\nApps Script empowers you to modify data directly within your Google Sheets. Update cell values with `setValue`, write to ranges using `setValues`, or insert and delete rows/columns with methods like `insertRowBefore` and `deleteColumn`. You can even clear cell contents using `clearContent`. This scripting power allows you to automate data editing tasks, saving you time and ensuring consistency in your spreadsheets. \n\n**Editing Cell Values:**\n\n* **Update a Single Cell:** Use `getRange` to target the cell and `setValue` to modify its content:\n\n```javascript\nsheet.getRange(\"A1\").setValue(\"New Value\");\n```\n\n* **Update a Range of Cells:** Employ `getRange` to specify the range and `setValues` to provide a two-dimensional array containing the new values:\n\n```javascript\nvar dataRange = sheet.getRange(\"A1:C3\");\ndataRange.setValues([\n  [\"Updated Value 1\", \"Updated Value 2\", \"Updated Value 3\"],\n  [\"New Row 1\", \"New Row 2\", \"New Row 3\"],\n]);\n```\n\n**Inserting and Deleting Data:**\n\n* **Insert Rows or Columns:** Utilize the `insertRowBefore` or `insertColumnBefore` methods to insert new rows or columns at a specific index.\n\n```javascript\nsheet.insertRowBefore(2); // Insert a new row before row 2\nsheet.insertColumnBefore(1); // Insert a new column before column 1\n```\n\n* **Delete Rows or Columns:** Employ the `deleteRow` or `deleteColumn` methods to remove rows or columns.\n\n```javascript\nsheet.deleteRow(5); // Delete row 5\nsheet.deleteColumn(4); // Delete column 4\n```\n\n**Clearing Cell Contents:**\n\n* **Clear a Single Cell:** Use `getRange` to target the cell and `clearContent` to remove its value and formatting.\n\n```javascript\nsheet.getRange(\"B5\").clearContent();\n```\n\n* **Clear a Range of Cells:** Employ `getRange` to specify the range and `clearContent` to remove all values and formatting within that range.\n\n```javascript\nvar dataRange = sheet.getRange(\"C1:E7\");\ndataRange.clearContent();\n```\n\n**Additional Considerations:**\n\n- Remember to save your script after making changes.\n- For complex editing scenarios, consider using loops and conditional statements to automate the process based on specific criteria.\n- Explore the Apps Script documentation for detailed information on these methods and additional functionalities for data manipulation in Google Sheets.\n\nBy leveraging these techniques, you can effectively edit the contents of your Google Sheets using Apps Script, streamlining your data management tasks and automating repetitive editing processes.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"a-database","text":"A Database"},{"depth":2,"slug":"read-data-from-google-sheet-using-apps-script","text":"Read Data From Google Sheet Using Apps Script"},{"depth":2,"slug":"more-than-read-data","text":"More Than Read Data?"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };