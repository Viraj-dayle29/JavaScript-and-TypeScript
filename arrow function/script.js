let ask = (question,yes,no) => {
    if(confirm(question)) yes();
    else no();
}

ask("Are you tall ?",() => alert("Alright"),() => alert("Work on your height"));