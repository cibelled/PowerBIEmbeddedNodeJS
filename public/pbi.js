

// Read embed application token from textbox
var txtAccessToken ='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImllX3FXQ1hoWHh0MXpJRXN1NGM3YWNRVkduNCIsImtpZCI6ImllX3FXQ1hoWHh0MXpJRXN1NGM3YWNRVkduNCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMmUzMjkwY2ItOGQ0MC00MDU4LWFiZTUtMDJjNGY1OGI4N2UzLyIsImlhdCI6MTU2ODMwNjI2NCwibmJmIjoxNTY4MzA2MjY0LCJleHAiOjE1NjgzMTAxNjQsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBU1FBMi84TUFBQUEyWGdqU0ZpbGtLenRhMld2WFhYajlxbWVUd205Q09IT2RkSmZOYzFtSXN3PSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiI3ZjE2MjQwNy1jZjRhLTQ2MWMtOGVkYy0zZWY2M2ExNzExMTQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IkRhbmllbGUiLCJnaXZlbl9uYW1lIjoiQ2liZWxsZSIsImlwYWRkciI6IjE4OS4xMjYuMTk0LjM0IiwibmFtZSI6IkNpYmVsbGUgRGFuaWVsZSIsIm9pZCI6ImYwNmNkZDg2LWFhMWItNDAwOS1iZTllLTdhNTljOGNiNjExOCIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS0yNzU3NTcwNDQtMjk3NjEzMTYzNC05MjU2NzExNy0zNzY1MCIsInB1aWQiOiIxMDAzMjAwMDRCNTgwRjg4Iiwic2NwIjoiQXBwLlJlYWQuQWxsIENhcGFjaXR5LlJlYWQuQWxsIENhcGFjaXR5LlJlYWRXcml0ZS5BbGwgQ29udGVudC5DcmVhdGUgRGFzaGJvYXJkLlJlYWQuQWxsIERhc2hib2FyZC5SZWFkV3JpdGUuQWxsIERhdGFmbG93LlJlYWQuQWxsIERhdGFmbG93LlJlYWRXcml0ZS5BbGwgRGF0YXNldC5SZWFkLkFsbCBEYXRhc2V0LlJlYWRXcml0ZS5BbGwgR2F0ZXdheS5SZWFkLkFsbCBHYXRld2F5LlJlYWRXcml0ZS5BbGwgUmVwb3J0LlJlYWQuQWxsIFJlcG9ydC5SZWFkV3JpdGUuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWQuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWRXcml0ZS5BbGwgV29ya3NwYWNlLlJlYWQuQWxsIFdvcmtzcGFjZS5SZWFkV3JpdGUuQWxsIiwic3ViIjoiZzVxSWVXMTh6dExaU3hqbkN3Nkpkc0NCZXYtLUhOVTJaZTExa0E0RE40VSIsInRpZCI6IjJlMzI5MGNiLThkNDAtNDA1OC1hYmU1LTAyYzRmNThiODdlMyIsInVuaXF1ZV9uYW1lIjoiY2liZWxsZS5kYW5pZWxlQGxhLmxvZ2ljYWxpcy5jb20iLCJ1cG4iOiJjaWJlbGxlLmRhbmllbGVAbGEubG9naWNhbGlzLmNvbSIsInV0aSI6IktCV1NjekJUWmttTjk0cW54MGdxQUEiLCJ2ZXIiOiIxLjAifQ.ZalbjHOE7PIfd7W5zp1ePds1qK3mD5l_s9I3bx-i-wC5V7I5kW1H6hUCyqnVxvraaWZdCbh5LLLzgBAzFQnYwkqA4xBwVHPTdwzLc7AYP-iw-PNshYhb-3bZuie-YhPc-3gcT6WzcVor4txe1vm_fUmbE5XOlBZ2VZGGfkcrt9OB1w7Z2kYCEZCwBG0JIWHjG-4md7xTu0ahIHPMGIIWVnT30KW6ba-gBujfqmhSL18Kdoe50qiaLBlv9VibY8VRHPoTcslWGjUfB0aYnsIuiKpeRqfo35Cbp4_FYdHqhoec3cAesUQLI_nxdKHd60q-4hHzl3IKBiRR44r0yaU30Q';
 
// Read embed URL from textbox
var txtEmbedUrl =  'https://api.powerbi.com/v1.0/myorg/groups/d207b4e9-43cb-45bc-80d1-c4f0616aaf42/reports/645c96e7-ec18-4a6a-b42c-554c3de11096';
 
// Read report Id from textbox
var txtEmbedReportId = '645c96e7-ec18-4a6a-b42c-554c3de11096';
 
// Read embed type from radio
var tokenType = 0;
 
// Get models. models contains enums that can be used.
var models = window['powerbi-client'].models;
 
// We give All permissions to demonstrate switching between View and Edit mode and saving report.
var permissions = models.Permissions.All;
 
// Embed configuration used to describe the what and how to embed.
// This object is used when calling powerbi.embed.
// This also includes settings and options such as filters.
// You can find more information at https://github.com/Microsoft/PowerBI-JavaScript/wiki/Embed-Configuration-Details.
var config = {
    type: 'report',
    tokenType: tokenType == '0' ? models.TokenType.Aad : models.TokenType.Embed,
    accessToken: txtAccessToken,
    embedUrl: txtEmbedUrl,
    id: txtEmbedReportId,
    permissions: permissions,
    settings: {
        filterPaneEnabled: true,
        navContentPaneEnabled: true
    }
};
 
// Get a reference to the embedded report HTML element
var embedContainer = $('#embedContainer')[0];
 
// Embed the report and display it within the div container.
var report = powerbi.embed(embedContainer, config);
 
// Report.off removes a given event handler if it exists.
report.off("loaded");
 
// Report.on will add an event handler which prints to Log window.
report.on("loaded", function () {
    Log.logText("Loaded");
});
 
// Report.off removes a given event handler if it exists.
report.off("rendered");
 
// Report.on will add an event handler which prints to Log window.
report.on("rendered", function () {
    Log.logText("Rendered");
});
 
report.on("error", function (event) {
    Log.log(event.detail);
 
    report.off("error");
});
 
report.off("saved");
report.on("saved", function (event) {
    Log.log(event.detail);
    if (event.detail.saveAs) {
        Log.logText('In order to interact with the new report, create a new token and load the new report');
    }
});