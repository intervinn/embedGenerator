function setOutput(str) {
    str = str.replaceAll("\n", "<br/>")
    document.getElementById("output").innerHTML = str
}

function generate() {

    var title = document.getElementById("title").value
    if (title === "") title = "None"; else title = `"${title}"`
    var description = document.getElementById("description").value
    if (description === "") description = "None"; else description = `"${description}"`
    var color = document.getElementById("color").value.replace("#", "0x")

    setOutput(`embed = discord.Embed(title=${title} description=${description} color=${color})`)
}
