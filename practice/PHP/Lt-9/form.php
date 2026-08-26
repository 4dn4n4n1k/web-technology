<!DOCTYPE html>

<html>
    <head>
        <title>Form Validation</title>
    </head>

    <body>
        <h1>Submit your infos below</h1>

        <form action="process.php" method="post">
            <label for="name">Name:</label>
            <input type="text" name="name" id="name">
            <br><br>
            <label for="email">Email:</label>
            <input type="email" name="email" id="email">
            <br><br>
            <label for="age">Age:</label>
            <input type="number" name="age" id="age">
            <br><br>
            <label for="gender">Gender:</label>
            <input type="radio" name="gender" id="gender">Male
            <input type="radio" name="gender" id="gender">Female
            <br><br>
            <label for="skills">Skills:</label>
            <input type="checkbox" name="skills[]" id="skills" value="Web Development">Web Development
            <input type="checkbox" name="skills[]" id="skills" value="Cybersecurity">Cybersecurity
            <input type="checkbox" name="skills[]" id="skills" value="Machine Learning">Machine Learning
            <br><br>
            <label for="country">Country:</label>
            <select name="country" id="country">
                <option value="select">Select a country</option>
                <option value="finland">Finland</option>
                <option value="sweden">Sweden</option>
                <option value="spain">Spain</option>
            </select>
            <br><br>
            <input type="submit" name="submit" id="submit">
        </form>
    </body>
</html>