const modules = ['✅ fundamentos', '⏳ front-end', '⏳ back-end', '⏳ cs'];;
function ModuleDetails() {
    return (
        modules.map((module) => {
            return <span>{ module }</span>
        })
    )
}

export default ModuleDetails;