
const class1 = 'w-1/2 p-1 md:p-2 outline h-full'
const class2 = 'w-full p-1 md:p-2 outline h-full'

const projects1 = [{
  class: class2,
  title: 'Project0',
  description: 'AKSSKAKSKS',
  img: ''
},
{
  class: class1,
  title: 'Project1',
  description: 'Description',
  tags: [{ tag: 'vue2' }, { tag: 'vue2' }, { tag: 'vue2' }],
  img:''
},
{
  class: class1,
  title: 'Project2',
  description: 'Description',
  img: '',
  tags: [{ tag: 'vue2' }, { tag: 'vue2' }, { tag: 'vue2' }]
}

]

// const projects2 = [{
//   class: class1,
//   title: 'Project0',
//   description: 'AKSSKAKSKS'
// },
// {
//   class: class1,
//   title: 'Project1',
//   description: 'Description'
// },
// {
//   class: class2,
//   title: 'Project2',
//   description: 'Description'
// }]
export default function Projects() {
  return (
    <>
      <section className="mt-48 mb-32" id="projects">
        <hr className="h-px my-8 bg-white border-0 dark:bg-white w-1/5"></hr>
        <div className="text-2xl">
          Projects
        </div>
        <div className="mt-6">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-full flex-wrap" >
              {
                projects1.map((item) => (
                  <div className={item.class}>
                    <div>
                      {item.title}
                    </div>
                    <div>
                      {item.description}
                    </div>
                  </div>
                ))
              }
            </div>
            {/* <div className="flex w-1/2 flex-wrap">
              {
                projects2.map((item) => (
                  <div className={item.class}>
                    <div>
                      {item.title}
                    </div>
                    <div>
                      {item.description}
                    </div>
                  </div>
                ))
              }
            </div> */}
          </div>
        </div>



      </section>
    </>
  )
}