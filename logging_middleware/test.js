const Log = require("./logger");
async function testLogger() {
    try {
        console.log("Testing logger...");
        
        await Log(
            "test_stack",
            "INFO",
            "test_package",
            "This is a test log message"
        );
        
        console.log("Logger test completed successfully");
    } catch (error) {
        console.error("Test failed:", error.message);
    }
}

// Run the test
testLogger();
