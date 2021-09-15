import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { Software } from 'src/app/shared/models/Software.model';
import { AUTH_TEKEN_KEY, AUTH_USER_FIRST_NAME, AUTH_USER_LAST_NAME, AUTH_USER_TYPE } from 'src/app/state/CurrentUser';

declare const $: any;

@Component({
  selector: 'app-sof-table',
  templateUrl: './sof-table.component.html',
  styleUrls: ['./sof-table.component.css']
})

export class SofTableComponent implements OnInit, AfterViewInit{

  formValue ! : FormGroup;
  softwareObj : Software = new Software();
  softwareData ! : any;
  showAdd ! : boolean;
  showUpdate ! : boolean;
  p: number = 1;
  term: any;
   public typeCompte !: string;
   public lastName ! : string;
   public firstName ! : string;
   public KeyUser : number = 0;


  constructor(private formbuilder: FormBuilder,private api : ApiService, private router: Router) {}

  title = 'Datatable';

  @ViewChild('dTable', {static: false}) dataTable: any;

  ngAfterViewInit(): void {
    $(this.dataTable.nativeElement).DataTable();
  }

  ngOnInit(): void {

    this.typeCompte = sessionStorage.getItem(AUTH_USER_TYPE)!;
    this.lastName = sessionStorage.getItem(AUTH_USER_LAST_NAME)!;
    this.firstName = sessionStorage.getItem(AUTH_USER_FIRST_NAME)!;
    this.KeyUser= +sessionStorage.getItem(AUTH_TEKEN_KEY)!;

    this.formValue = this.formbuilder.group({
      soft_ref : [''], 
      soft_manif : [''],
      soft_suppl : [''],
      soft_familly : [''],
      soft_version : [''],
      soft_Desc : ['']
    })
    this.getAllSoftwares();
  }

  clickAddSoftware(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  } 

  postSoftware(){
    this.softwareObj.soft_Desc = this.formValue.value.soft_Desc;
    this.softwareObj.soft_familly = this.formValue.value.soft_familly;
    this.softwareObj.soft_manif = this.formValue.value.soft_manif;
    this.softwareObj.soft_ref = this.formValue.value.soft_ref;
    this.softwareObj.soft_suppl = this.formValue.value.soft_suppl;
    this.softwareObj.soft_version = this.formValue.value.soft_version;
    this.softwareObj.imageUrl = 'xxx';
    
    this.api.addSoftware(this.softwareObj)
    .subscribe(res=>{
      console.log(res);
      alert("Software Added Successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllSoftwares();
    },
    err=>{
      alert("something Went Wrong")
    })
    
  }

  getAllSoftwares() {
    this.api.getSoftwares()
    .subscribe(res=>{
      this.softwareData = res;
    })
  }

  deleteSoftware(row: any){
    this.api.deleteSoftware(row.id_software)
    .subscribe(res => {
      alert("Deleted succefully");
      this.getAllSoftwares();
    })

  }

  DemSoftApr(row: any){
    this.api.DemApSof(row.id_software,this.KeyUser)
    .subscribe(res => {
      alert("Demmad Sent succefully");
      this.getAllSoftwares();
    }, err=> {
      alert("Something went wrong");
    })

  }

  onEdit(row: any){
    this.showAdd = false;
    this.showUpdate = true;
    this.softwareObj.id_software = row.id_software;
    this.formValue.controls['soft_ref'].setValue(row.soft_ref);
    this.formValue.controls['soft_manif'].setValue(row.soft_manif)
    this.formValue.controls['soft_suppl'].setValue(row.soft_suppl)
    this.formValue.controls['soft_familly'].setValue(row.soft_familly)
    this.formValue.controls['soft_version'].setValue(row.soft_version)
    this.formValue.controls['soft_Desc'].setValue(row.soft_Desc)
  }

  updateSoftware() {
    this.softwareObj.soft_Desc = this.formValue.value.soft_Desc;
    this.softwareObj.soft_familly = this.formValue.value.soft_familly;
    this.softwareObj.soft_manif = this.formValue.value.soft_manif;
    this.softwareObj.soft_ref = this.formValue.value.soft_ref;
    this.softwareObj.soft_suppl = this.formValue.value.soft_suppl;
    this.softwareObj.soft_version = this.formValue.value.soft_version;
    this.softwareObj.imageUrl = 'xxx';
    this.api.updateSoftware(this.softwareObj)
    .subscribe(res =>{
      alert("updated Successfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllSoftwares();
    })
  }

  onDeconnexion(){
    sessionStorage.removeItem(AUTH_TEKEN_KEY);
    sessionStorage.removeItem(AUTH_USER_TYPE);
    sessionStorage.removeItem(AUTH_USER_LAST_NAME);
    sessionStorage.removeItem(AUTH_USER_FIRST_NAME);
    this.router.navigateByUrl("/");
  }


}
