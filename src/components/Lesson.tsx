import classnames from "classnames";
import { format, isPast } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR";
import { CheckCircle, Lock } from "phosphor-react";
import { Link, useParams } from "react-router-dom";

interface LessonProps{
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class'
}

export default function Lesson(props: LessonProps) {
    const { slug } = useParams<{ slug: string }>()

    const isLessonAvailable = isPast(props.availableAt);
    const availableDateFormated = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'kk'h'mm",{
      locale: ptBR
    })

    const isActiveLesson = slug === props.slug;

    return (
      <Link to={`/event/lesson/${props.slug}`} className="group">
        <span className="text-gray-300">
          {availableDateFormated}
        </span>

        <div 
          className={classnames('rounded border border-gray-500 p-4 mt-2 hover:border-green-500',{
            'bg-green-500': isActiveLesson
          })}
        >
          
          <header className="flex items-center justify-between">
            { isLessonAvailable ?(              
              <span className={classnames('text-sm font-medium flex gap-2',{
                'text-white': isActiveLesson,'text-blue-500': !isActiveLesson
              })}>
              <CheckCircle size={20}/>
              Conteúdo liberado
            </span>
            ):(
              <span className='text-sm text-orange-500 font-medium flex gap-2'>
              <Lock size={20}/>
              Em breve
            </span>
            )}
            <span className={classnames("text-xs rounded border px-2 py-1  font-bold",{
              'border-white': isActiveLesson,'border-green-300': !isActiveLesson
            })}>
              {props.type === 'live' ? 'AO VIVO': 'AULA PRÁTICA'}
            </span>
          </header>

          <strong 
            className={classnames(' block mt-5',{'text-white': isActiveLesson,'text-gray-200': !isActiveLesson})}
          >
            {props.title}
          </strong>
        </div>
      </Link>
    )
  }
  