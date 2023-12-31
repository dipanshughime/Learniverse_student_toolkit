document.addEventListener('click',e=>{
    if(e.target.matches('[data-up-vote-btn]')) handleUpVote(e.target)
})

function handleUpVote(button){
    button.disabled=true
    const suggestioncard=button.closest("[data-suggestion-id]")
    fetch("/up-vote-suggestion",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({suggestionId:suggestioncard.dataset.suggestionId}),
    }).then(res=> res.json())
    .then(({votes})=>{
        const UpVoteCount =suggestioncard.querySelector('[data-up-vote-count]')
        UpVoteCount.textContent=votes
    }).finally(()=>{
        button.disabled=false
    })
}