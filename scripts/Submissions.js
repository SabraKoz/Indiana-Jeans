export const SubmissionList = async () => {
    
    const response = await fetch("http://localhost:8088/submissions")
    const submissions = await response.json()

    let submissionHTML = ""
    const submissionsArray = submissions.map(
        (submission) => {
            return `<section class="submission">
                        <div>Owns Jeans? ${submission.ownsBlueJeans}</div>
                        <div>Area type foreign key? ${submission.socioLocationId}</div>
                    </section>`
        }
    )
        submissionHTML += submissionsArray.join("")
        return submissionHTML
   
}

// for (const submission of submissions) {
//     submissionHTML += `<section class="submission">
//         <div>Owns Jeans? ${submission.ownsBlueJeans}</div>
//         <div>Area type foreign key? ${submission.socioLocationId}</div>
//     </section>`
// }