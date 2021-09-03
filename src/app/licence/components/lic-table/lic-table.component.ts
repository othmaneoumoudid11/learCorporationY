import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import { ApiService } from 'src/app/shared/api.service';
import { Licence } from 'src/app/shared/models/Licence.model';

declare const $: any;

@Component({
  selector: 'app-lic-table',
  templateUrl: './lic-table.component.html',
  styleUrls: ['./lic-table.component.css']
})

export class LicTableComponent implements OnInit, AfterViewInit{

  formValue ! : FormGroup;
  licenceObj : Licence = new Licence();
  licenceData ! : any;
  showAdd ! : boolean;
  showUpdate ! : boolean;
  p: number = 1;
  term: any;
  constructor(private formbuilder: FormBuilder,private api : ApiService) {}

  title = 'Datatable';

  @ViewChild('dTable', {static: false}) dataTable: any;

  ngAfterViewInit(): void {
    $(this.dataTable.nativeElement).DataTable();
  }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      lic_ref : [''], 
      lic_serial : [''],
      lic_type : [''],
      lic_cost : [''],
      currency : [''],
      lic_BO_alloc : [''],
      lic_vend_cont_ref : ['']
    })
    this.getAllLicences();
  }

  clickAddLicence(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  } 

  postLicence(){
    console.log(this.formValue.value.currency)
    this.licenceObj.currency = this.formValue.value.currency;
    this.licenceObj.lic_BO_alloc = this.formValue.value.lic_BO_alloc;
    this.licenceObj.lic_cost = this.formValue.value.lic_cost;
    this.licenceObj.lic_ref = this.formValue.value.lic_ref;
    this.licenceObj.lic_serial = this.formValue.value.lic_serial;
    this.licenceObj.lic_type = this.formValue.value.lic_type;
    this.licenceObj.lic_vend_cont_ref = this.formValue.value.lic_vend_cont_ref;
    this.licenceObj.imageUrl = 'xxx';

    
    this.api.addLicence(this.licenceObj)
    .subscribe(res=>{
      console.log(res);
      alert("Licence Added Successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllLicences();
    },
    err=>{
      alert("something Went Wrong")
    })
    
  }

  getAllLicences() {
    this.api.getLicences()
    .subscribe(res=>{
      this.licenceData = res;
    })
  }

  deleteLicence(row: any){
    this.api.deleteLicence(row.id_licence)
    .subscribe(res => {
      alert("Deleted succefully");
      this.getAllLicences();
    })

  }

  onEdit(row: any){
    this.showAdd = false;
    this.showUpdate = true;
    this.licenceObj.id_licence = row.id_licence;
    this.formValue.controls['lic_ref'].setValue(row.lic_ref);
    this.formValue.controls['lic_serial'].setValue(row.lic_serial)
    this.formValue.controls['lic_type'].setValue(row.lic_type)
    this.formValue.controls['lic_cost'].setValue(row.lic_cost)
    this.formValue.controls['currency'].setValue(row.currency)
    this.formValue.controls['lic_BO_alloc'].setValue(row.lic_BO_alloc)
    this.formValue.controls['lic_vend_cont_ref'].setValue(row.lic_vend_cont_ref)
  }

  updateLicence() {
    this.licenceObj.lic_ref = this.formValue.value.lic_ref;
    this.licenceObj.lic_serial = this.formValue.value.lic_serial;
    this.licenceObj.lic_type = this.formValue.value.lic_type;
    this.licenceObj.lic_cost = this.formValue.value.lic_cost;
    this.licenceObj.currency = this.formValue.value.currency;
    this.licenceObj.lic_BO_alloc = this.formValue.value.lic_BO_alloc;
    this.licenceObj.lic_vend_cont_ref = this.formValue.value.lic_vend_cont_ref;
    this.licenceObj.imageUrl = 'xxx';
    this.api.updateLicence(this.licenceObj)
    .subscribe(res =>{
      alert("updated Successfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllLicences();
    })
  }

}