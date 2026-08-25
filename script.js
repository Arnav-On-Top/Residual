var clicks = 0;
function systemInfo() {
    clicks = clicks + 1;
    document.getElementById("message").innerHTML = "System check executed successfully. No actions needed";
}
function settings() {
    clicks = clicks + 1;
    document.getElementById("message").innerHTML = "No actions needed.";
}
function storage() {
    clicks = clicks + 1;
    document.getElementById("message").innerHTML = "287/498 GB storage left.";
}
function start() {
    document.getElementById("main").style.display = "none";
    document.getElementById("loading").style.display = "block";
    document.getElementById("loadingText").innerHTML = "CHECKING SYSTEM...";
    setTimeout(function() {
        document.getElementById("loadingText").innerHTML = "LOADING ASSETS...";
        document.getElementById("loadingMessage").innerHTML = "> Loading assets...";
    }, 1000);
    setTimeout(function() {
        document.getElementById("loadingText").innerHTML = "CHECKING FILES...";
        document.getElementById("loadingMessage").innerHTML =
            "> Loading assets...<br>> Checking files...";
    }, 2000);
    setTimeout(function() {
        document.getElementById("loadingText").innerHTML = "CHECKING BROWSER...";
        document.getElementById("loadingMessage").innerHTML =
            "> Loading assets...<br>> Checking files...<br>> Checking browser...";
    }, 3000);
    setTimeout(function() {
        document.getElementById("loadingText").innerHTML = "SCANNING FILES...";
        document.getElementById("loadingMessage").innerHTML =
            "C:\\System\\config.dat - OK<br>" +
            "C:\\System\\process.log - OK<br>" +
            "C:\\Browser\\cache.db - OK<br>" +
            "C:\\Users\\Guest\\session.tmp - ERROR";
    }, 4000);
    setTimeout(function() {
        document.getElementById("loadingText").innerHTML = "UNKNOWN FILE DETECTED";
        document.getElementById("loadingMessage").innerHTML =
            "C:\\System\\config.dat - OK<br>" +
            "C:\\System\\process.log - OK<br>" +
            "C:\\Browser\\cache.db - OK<br>" +
            "C:\\Users\\Guest\\session.tmp - ERROR<br><br>" +
            "> UNKNOWN FILE DETECTED";
    }, 4700);
    setTimeout(function() {
        document.getElementById("loadingText").innerHTML = "SYSTEM ANOMALY DETECTED";
        document.getElementById("loadingMessage").innerHTML =
            "> WARNING: Unknown system anomaly detected.";
    }, 5400);
    setTimeout(function() {
        document.getElementById("loadingText").innerHTML = "UNKNOWN PROCESS FOUND";
        document.getElementById("loadingMessage").innerHTML =
            "> Unknown system anomaly detected.<br>> Unknown process found.";
    }, 6100);
    setTimeout(function() {
        document.getElementById("loadingText").innerHTML = "SECURITY CHECK FAILED";
        document.getElementById("loadingMessage").innerHTML =
            "> Unknown system anomaly detected.<br>" +
            "> Unknown process found.<br>" +
            "> Security check failed.";
    }, 6800);
    setTimeout(function() {
        document.getElementById("loadingText").innerHTML = "SYSTEM INFORMATION ACCESSED";
        document.getElementById("loadingMessage").innerHTML =
            "> Unknown system anomaly detected.<br>" +
            "> Unknown process found.<br>" +
            "> Security check failed.<br>" +
            "> System information accessed.";
    }, 7500);
    setTimeout(function() {
        document.getElementById("loadingText").innerHTML = "ADMINISTRATOR ACCESS GAINED";
        document.getElementById("loadingMessage").innerHTML =
            "> Unknown system anomaly detected.<br>" +
            "> Unknown process found.<br>" +
            "> Security check failed.<br>" +
            "> System information accessed.<br>" +
            "> Administrator access gained.";
    }, 8200);
    setTimeout(function() {
        document.getElementById("progress").style.width = "20%";
        document.getElementById("percent").innerHTML = "20%";
    }, 500);
    setTimeout(function() {
        document.getElementById("progress").style.width = "40%";
        document.getElementById("percent").innerHTML = "40%";
    }, 1000);
    setTimeout(function() {
        document.getElementById("progress").style.width = "60%";
        document.getElementById("percent").innerHTML = "60%";
    }, 2000);
    setTimeout(function() {
        document.getElementById("progress").style.width = "80%";
        document.getElementById("percent").innerHTML = "80%";
    }, 4000);
    setTimeout(function() {
        document.getElementById("progress").style.width = "100%";
        document.getElementById("percent").innerHTML = "100%";
    }, 6000);
    setTimeout(function() {
        showInformation();
    }, 9500);
}
function showInformation() {
    document.getElementById("loading").style.display = "none";
    document.getElementById("result").style.display = "block";
    var date = new Date();
    var currentDate = date.toLocaleDateString();
    var currentTime = date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });
    var language = navigator.language;
    var screenWidth = screen.width;
    var screenHeight = screen.height;
    var cpu = navigator.hardwareConcurrency;
    var pixelRatio = window.devicePixelRatio;
    var internet;
    if (navigator.onLine) {
        internet = "ONLINE";
    } else {
        internet = "OFFLINE";
    }
    var battery = "NOT AVAILABLE";
    if (navigator.getBattery) {
        navigator.getBattery().then(function(batteryObject) {
            battery = Math.round(batteryObject.level * 100) + "%";
            if (batteryObject.charging) {
                battery = battery + " - CHARGING";
            } else {
                battery = battery + " - NOT CHARGING";
            }
            showFinalInformation(
                currentDate,
                currentTime,
                language,
                screenWidth,
                screenHeight,
                cpu,
                pixelRatio,
                internet,
                battery
            );
        });
    } else {
        showFinalInformation(
            currentDate,
            currentTime,
            language,
            screenWidth,
            screenHeight,
            cpu,
            pixelRatio,
            internet,
            battery
        );
    }
}
function showFinalInformation(
    currentDate,
    currentTime,
    language,
    screenWidth,
    screenHeight,
    cpu,
    pixelRatio,
    internet,
    battery
) {
    document.getElementById("information").innerHTML =
        "USER DETECTED<br><br>" +
        "DATE: " + currentDate + "<br>" +
        "TIME: " + currentTime + "<br>" +
        "LANGUAGE: " + language + "<br>" +
        "SCREEN: " + screenWidth + " x " + screenHeight + "<br>" +
        "BATTERY: " + battery + "<br>" +
        "CONNECTION: " + internet + "<br>" +
        "CPU CORES: " + cpu + "<br>" +
        "PIXEL RATIO: " + pixelRatio + "<br>" +
        "CLICKS RECORDED: " + clicks;
    setInterval(function() {
        document.getElementById("information").innerHTML =
            "USER DETECTED<br><br>" +
            "DATE: " + currentDate + "<br>" +
            "TIME: " + currentTime + "<br>" +
            "LANGUAGE: " + language + "<br>" +
            "SCREEN: " + screenWidth + " x " + screenHeight + "<br>" +
            "BATTERY: " + battery + "<br>" +
            "CONNECTION: " + internet + "<br>" +
            "CPU CORES: " + cpu + "<br>" +
            "PIXEL RATIO: " + pixelRatio + "<br>" +
            "CLICKS RECORDED: " + clicks;
    }, 100);
    setTimeout(function() {
        document.getElementById("creepy").innerHTML =
            "WARNING: POSSIBLE MALWARE DETECTED.";
    }, 1500);
    setTimeout(function() {
        document.getElementById("warning").innerHTML =
            "WARNING: SYSTEM COMPROMISED.";

        document.getElementById("result").classList.add("glitch");
    }, 2000);
    setTimeout(function() {
        document.getElementById("creepy").innerHTML =
            "SYSTEM MAY BE INFECTED.";
    }, 3500);
    setTimeout(function() {
        document.getElementById("unknownProcess").innerHTML =
            "unknown.exe - NOT FOUND";
    }, 4500);
    setTimeout(function() {
        document.getElementById("creepy").innerHTML =
            "UNKNOWN PROCESS IS STILL RUNNING.";
    }, 5500);
    setTimeout(function() {
        document.getElementById("unknownProcess").innerHTML =
            "unknown.exe - RUNNING";
    }, 6000);
    setTimeout(function() {
        document.getElementById("warning").innerHTML =
            "SYSTEM CONTROL LOST.";

        document.getElementById("result").classList.remove("glitch");
        document.getElementById("result").classList.add("extremeGlitch");
    }, 6000);
    setTimeout(function() {
        document.getElementById("creepy").innerHTML =
            "DO NOT TRUST THIS SYSTEM.";
    }, 7500);
    setTimeout(function() {
        document.body.classList.add("flashScreen");
    }, 8000);
    setTimeout(function() {
        document.getElementById("warning").innerHTML =
            "SYSTEM ACCESS UNKNOWN.";
    }, 10000);
    setTimeout(function() {
        startRecovery();
    }, 15000);
}
function startRecovery() {
    document.getElementById("result").classList.remove("extremeGlitch");
    document.body.classList.remove("flashScreen");
    document.getElementById("result").style.display = "none";
    document.getElementById("recovery").style.display = "block";
    setTimeout(function() {
        document.getElementById("recoveryProgress").style.width = "20%";
        document.getElementById("recoveryPercent").innerHTML = "20%";
    }, 500);
    setTimeout(function() {
        document.getElementById("recoveryProgress").style.width = "40%";
        document.getElementById("recoveryPercent").innerHTML = "40%";
    }, 1000);
    setTimeout(function() {
        document.getElementById("recoveryProgress").style.width = "60%";
        document.getElementById("recoveryPercent").innerHTML = "60%";
    }, 1500);
    setTimeout(function() {
        document.getElementById("recoveryProgress").style.width = "80%";
        document.getElementById("recoveryPercent").innerHTML = "80%";
    }, 2000);
    setTimeout(function() {
        document.getElementById("recoveryProgress").style.width = "100%";
        document.getElementById("recoveryPercent").innerHTML = "100%";
    }, 2500);
    setTimeout(function() {
        document.getElementById("recoveryText").innerHTML =
            "SYSTEM RECOVERY COMPLETE";
    }, 3000);
    setTimeout(function() {
        document.getElementById("recoveryText").innerHTML =
            "SYSTEM NORMAL";
    }, 5000);
    setTimeout(function() {
        document.getElementById("recoveryText").innerHTML =
            "RECOVERY FAILED.";

        document.getElementById("recoveryText").style.color = "red";
    }, 8000);
    setTimeout(function() {
        document.getElementById("recoveryText").innerHTML =
            "UNKNOWN PROCESS RESTORED.";
    }, 9500);
    setTimeout(function() {
        document.getElementById("recoveryText").innerHTML =
            "SYSTEM CONTROL LOST.";
    }, 11000);
    setTimeout(function() {
        document.getElementById("recovery").style.display = "none";
        document.getElementById("result").style.display = "block";
        document.getElementById("result").classList.add("insaneGlitch");
        document.body.classList.add("flashScreen");
    }, 12000);
}