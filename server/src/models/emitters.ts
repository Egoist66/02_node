import EventEmitter from 'events'

export const emitters = () => {


    const emitter: EventEmitter = new EventEmitter()

    emitter.addListener('message', (message: string) => {
        console.log('====================================');
        console.log(message);
        console.log('====================================');
    })

    emitter.emit('message', 'hello world!')

}
