let _singleton = Symbol();
const TOPIC_API_URL =
    'http://localhost:8080/api/course/CID/module/MID/lesson/LID/topic';
const TOPIC_API_URL_TID =
    'http://localhost:8080/api/topic/TID';

export default class TopicService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new TopicService(_singleton);
        return this[_singleton]
    }
    createTopic(courseId, moduleId, lessonId, topic) {
        return fetch(TOPIC_API_URL.replace('CID', courseId).replace('MID', moduleId).replace('LID',lessonId), {
            body: JSON.stringify(topic),
            headers: { 'Content-Type': 'application/json' },
            method: 'POST'
        }).then(function (response) {
            return response.json();
        });
    }
    deleteTopic(topicId) {
        return fetch(TOPIC_API_URL_TID.replace('TID', topicId), {
            method: 'DELETE'
        });
    }

    findAllTopics() {

    }
    findAllTopicsForLesson(courseId, moduleId,lessonId) {
        return fetch(TOPIC_API_URL.replace('CID', courseId).replace('MID', moduleId).replace('LID',lessonId))
            .then(function (response) {
                if(response.status === 500) {
                    return null;
                } else {
                    return response.json();
                }
            });
    }
}