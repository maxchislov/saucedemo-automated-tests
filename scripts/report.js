const { merge } = require("mochawesome-merge");
const marge = require("mochawesome-report-generator");

const now = new Date().toISOString();
const reportDir = "cypress/reports";
const files = ["cypress/reports/**/*.json"];
const reportIdentifier = `local-${now}`;
const mergeOptions = {
    files,
};

const margeOptions = {
    reportDir,
    assetsDir: `${reportDir}/assets`,
    reportTitle: `Saucedemo tests - ${reportIdentifier}`,
    reportFilename: `saucedemo-tests-${reportIdentifier}`,
};

const generateReport = async () => {
    const report = await merge(mergeOptions);
    const [reportUrl] = await marge.create(report, margeOptions);
    console.log(`TEST REPORT READY  ${reportUrl}`);
    let { exec } = require('child_process'); // native in nodeJs
    const childProcess = exec(`open ${reportUrl}`);
};

generateReport();