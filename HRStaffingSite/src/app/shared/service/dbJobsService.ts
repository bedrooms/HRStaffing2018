import {Injectable} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import { Job } from '../model/job';



@Injectable()
export class JobsService {
    jobsCollection: AngularFirestoreCollection<Job>;
    jobs: Observable<Job[]>;
    constructor (public afs: AngularFirestore ){ 
        
    }

    getJobs(){
        this.jobs = this.afs.collection<Job>('jobs').valueChanges();
        console.log("service jobs -->", this.jobs);
        return this.jobs;
    }

    saveJob(_job : any){
        var ww = this.afs.collection('jobs').add(Object.assign({}, _job)); 
    }
  
  }