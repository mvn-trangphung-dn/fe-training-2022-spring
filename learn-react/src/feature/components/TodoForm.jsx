import React from 'react';
import { useState } from 'react';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, RadioGroup, FormControlLabel, Radio, TextareaAutosize, Select, Button } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const TodoForm = ({ saveUser }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [gender, setGender] = React.useState('female');
  const [comment, setComment] = React.useState('');
  const [country, setCountry] = React.useState('Viet Nam');

  const handleChangeValue = (event, input) => {
    switch(input) {
      case "name":
        return setName(event.target.value);
      case "password":
        return setPassword(event.target.value);
      case "gender":
        return setGender(event.target.value);
      case "comment":
        return setComment(event.target.value);
      case "country":
        return setCountry(event.target.value);
    }
  }
  const toggleShowPassword = () => {
    setShowPassword(x => !x);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      "name": name,
      "password": password,
      "gender": gender,
      "comment": comment,
      "country": country
    }
    saveUser(newUser);
  }
  
  return (
    <form>
      <FormControl fullWidth margin="normal" variant="outlined">
        <InputLabel htmlFor="name" className="label-form">Name</InputLabel>
        <OutlinedInput  variant="outlined"
                    onChange={(e) => handleChangeValue(e, "name")}
                    value={name}
                    className="form-control"/>
      </FormControl>
      <FormControl fullWidth margin="normal" variant="outlined">
        <InputLabel htmlFor="password" className="label-form">Password</InputLabel>
        <OutlinedInput  variant="outlined"
                    onChange={(e) => handleChangeValue(e, "password")}
                    value={password}
                    type={showPassword ? 'text' : 'password'}
                    className="form-control"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={toggleShowPassword}
                          edge="end">
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
        />
      </FormControl>
      <FormControl fullWidth margin="normal" variant="outlined">
        <RadioGroup className="gender-group" aria-label="gender" name="gender" value={gender} onChange={(e) => handleChangeValue(e, "gender")}>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
      <FormControl fullWidth margin="normal" variant="outlined">
        <TextareaAutosize
          className='textarea-form'
          placeholder="Leave a comment"
          minRows={4}
          value={comment}
          onChange={(e) => handleChangeValue(e, "comment")}
        />
      </FormControl>
      <FormControl fullWidth margin="normal" variant="outlined">
        <InputLabel htmlFor="country" className="label-form">Country</InputLabel>
        <Select
          native
          value={country}
          onChange={(e) => handleChangeValue(e, "country")}>
          <option value={'Viet Nam'}>Viet Nam</option>
          <option value={'English'}>English</option>
          <option value={'Korea'}>Korea</option>
        </Select>
      </FormControl>
      <Button size="large" type="submit" variant="contained" color="primary" fullWidth className="btn-submit" onClick={handleSubmit}>Add</Button>
    </form>
  );
};

export default TodoForm;
