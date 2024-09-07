const pinnedTask = document.querySelector('.pinned')
const allTasks = document.querySelector('.all')
const input = document.querySelector('#tasks-value')
const blog = document.querySelector('.blog')

blog.addEventListener('click', (e) => {
    if (e.target.closest('.task-check')) {
        if(e.target.classList.contains('checked')) {
            e.target.textContent = ''
            e.target.classList.remove('checked')
            allTasks.appendChild(e.target.closest('.task'))
            if(pinnedTask.querySelector('h2').classList.contains('hidden') && pinnedTask.querySelectorAll('.task').length == 0) {
                pinnedTask.querySelector('h2').classList.remove('hidden')
            }
            if(!allTasks.querySelector('h2').classList.contains('hidden')) {
                allTasks.querySelector('h2').classList.add('hidden')
            }
        } else {
            e.target.textContent = 'V'
            e.target.classList.add('checked')
            if(!pinnedTask.querySelector('h2').classList.contains('hidden')) {
                pinnedTask.querySelector('h2').classList.add('hidden')
            }
            pinnedTask.appendChild(e.target.closest('.task'))
            if(allTasks.querySelector('h2').classList.contains('hidden') && allTasks.querySelectorAll('.task').length == 0) {
                allTasks.querySelector('h2').classList.remove('hidden')
            }
        }
    }
})

input.addEventListener('keyup', (e) => {
    if (e.key == 'Enter' && input.value != '') {
        allTasks.insertAdjacentHTML('afterbegin', `<div class="task"><span class="task-text">${input.value}</span><div for="checkbox1" class="task-check"></div></div>`)
        if(!allTasks.querySelector('h2').classList.contains('hidden')) {
            allTasks.querySelector('h2').classList.add('hidden')
        }
        input.value = ''
    }
    allTasks.querySelectorAll('.task').forEach(elem => {
        if (!elem.querySelector('.task-text').textContent.toLowerCase().includes(input.value.toLowerCase())) {
            elem.classList.add('hidden')
        } else if (elem.classList.contains('hidden')) {
            elem.classList.remove('hidden')
        }
    })
})





// Через Input:checkbox
// const inpId = document.querySelectorAll('input')

// inpId.forEach(elem => {
//     elem.addEventListener('change', () => {
//         const label = document.querySelector(`label[for="${elem.id}"]`);
//         if(elem.checked) {
//             label.textContent = 'V'
//         } else {
//             label.textContent = ''
//         }
//     })
// })