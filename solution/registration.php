<!DOCTYPE html>

<html>
    <head>
        <title>Registration Form</title>
    </head>
    <body>
        <h1>Welcome</h1>

        <form action="validate.php" method="POST">
            <label for="fName">First Name:</label>
            <input type="text" name="fName" id="fName">
            <br><br>

            <label for="lName">Last Name:</label>
            <input type="text" name="lName" id="lName">
            <br><br>

            <label for="dob">Date of Birth:</label>
            <input type="text" name="dob" id="dob">
            <br><br>

            <label for="phone">Phone:</label>
            <input type="text" name="phone" id="phone">
            <br><br>

            <label for="email">Email:</label>
            <input type="text" name="email" id="email">
            <br><br>

            <label for="geder">Gender:</label>
            <input type="radio" name="gender" id="male">Male
            <input type="radio" name="gender" id="female">Female
            <br><br>

            <label for="password">Password:</label>
            <input type="password" name="password" id="password">
            <br><br>

            <label for="cPassword">Confirm password:</label>
            <input type="password" name="cPassword" id="cPassword">
            <br><br>

            <input type="checkbox" name="cbox" id="cbox">I agree to all terms and conditions
            <br><br>

            <input type="submit" name="submit" id="submit" value="Submit Data">
        </form>
    </body>
</html>