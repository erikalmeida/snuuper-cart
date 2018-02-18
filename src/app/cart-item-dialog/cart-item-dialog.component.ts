import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-cart-item-dialog",
  templateUrl: "./cart-item-dialog.component.html",
  styleUrls: ["./cart-item-dialog.component.css"]
})
export class CartItemDialogComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CartItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      quantity: ""
    });
  }

  submit(form) {
    this.dialogRef.close(`${form.value.quantity}`);
  }
}
