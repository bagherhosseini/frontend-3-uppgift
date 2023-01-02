import React, { useState, useEffect } from "react";
import "./style1.scss";

export default function test() {
  return (
    <div class="form__group field">
      <input
        type="input"
        class="form__field"
        placeholder="Name"
        name="name"
        id="name"
        required
      />
      <label for="name" class="form__label">
        Name
      </label>
    </div>
  );
}
