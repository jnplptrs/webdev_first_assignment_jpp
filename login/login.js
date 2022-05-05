let loginAttmpts = 3;

function submitAdminLogin(){
    let adminName = document.getElementById("adminName").value;
    let adminPassword = document.getElementById("adminPassword").value;

    if(adminName === "Admin" && adminPassword === "Admin"){
        window.location.href = "../admin/admin.html"
        return false;
    } else {
        loginAttmpts--;
        alert("wrong password or username")

        if(loginAttmpts === 0) {
            document.getElementById("adminName").disabled = true;
            document.getElementById("adminPassword").disabled = true;
            document.getElementById("adminSubmit").disabled = true;
            return false;
        }
        return false;
    }
}